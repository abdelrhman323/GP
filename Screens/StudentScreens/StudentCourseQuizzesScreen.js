import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator,Image } from 'react-native';
import base64 from 'base-64'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel, } from 'react-native-simple-radio-button';
import { CommonActions} from '@react-navigation/native';

export default class Quiz extends Component {

    state = {
        loading: false,
        showQuiz: false,
        userAnswer: 0,
        asked: 0,
        quizData: [],
        currentQuestion: '',
        currentQuestionOptions: [],
        totalUserAnswers: [],
        link:'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=base64'
    }
    handelQuizLinks(Links){
        this.state({link:Links})
    }
    componentDidMount() {
        this.fetchQuizData()
    }

    fetchQuizData() {
        const { loading } = this.state
        const {link} = this.state
        this.setState({ loading: !loading })
        fetch(
            this.state.link
        )
            .then(response => response.json())
            .then(({ results }) => {
                this.setState({ loading: false, quizData: results })
                // console.log("New Result =>> ", results)
            })
            .catch(error => {
                alert(`ERROR:${error.message}`);
                this.setState({ loading: false });
            })
    }
    goToResult() {
        alert('aaaaaaaaaaaaaaaaaaaa')
        this.props.navigation.navigate('StudentCourseOverviewScreen');
     }

    _renderQuestion() {
        const { quizData, asked } = this.state;
        if (!quizData || quizData.length === 0) {
            this.fetchQuizData()
        } else {
            const currentQuestion = base64.decode(quizData[asked].question);

            const options = quizData[asked].incorrect_answers
            options.push(quizData[asked].correct_answer);

            const currentQuestionOptions = options.map((option, index) => ({
                label: base64.decode(option),
                value: index,
            }))

            this.setState({ currentQuestion, currentQuestionOptions, showQuiz: true, startTime: new Date().getTime() })
        }
    }

    onPress = userAnswer => this.setState({ userAnswer });

    nextQuestion(last) {
        const { userAnswer, asked, quizData, currentQuestionOptions, totalUserAnswers } = this.state

        const currentQuestion = quizData[asked]

        const currentAnswer = {
            question: base64.decode(currentQuestion.question),
            correct_answer: base64.decode(currentQuestion.correct_answer),
            userAnswer: currentQuestionOptions[userAnswer].label,
            score: base64.decode(currentQuestion.correct_answer) === currentQuestionOptions[userAnswer].label,
        }

        totalUserAnswers.push(currentAnswer)

        this.setState({
            totalUserAnswers: totalUserAnswers,
            asked: asked + 1,
            userAnswer: 0,
        }, () => (!last ? this._renderQuestion() : this.calculateResult()))

    }

    calculateResult() {
        const { navigate } = this.props.navigation;
        const { totalUserAnswers, startTime } = this.state
        const endTime = new Date().getTime()
        const totalTime = Math.floor(endTime - startTime)

        let totalScore = 0;
        for (let i = 0; i < totalUserAnswers.length; i++) {
            if (totalUserAnswers[i].score) {
                totalScore += 1
            }
        }

        this.setState({ loading: true })
      alert(`totalTime:  ${(parseInt(totalTime) / 60)} sec\ntotalScore:  ${parseInt(totalScore)} out 10`
      )
      this.setState({ showQuiz: false,loading: false,asked: 0 });
      totalScore = 0;
    }

    render() {
        <Image source={require('../../assets/y165_1_front.png')}></Image>
        const { loading, showQuiz, userAnswer, currentQuestion, currentQuestionOptions, quizData, asked } = this.state
        return loading ? (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#007bff" />
            </View>
        ) : ( 
                <View style={styles.container}>
                    {
                        !showQuiz ? (
                            <View style={styles.container}>
                                <Text style={styles.text}>Image Processing Quiz</Text>
                                <Text style={styles.warningText}>Please click to start the quiz.</Text>
                                <Button
                                    onPress={() => this._renderQuestion()}
                                    title='Start Quiz'
                                    color="#007bff"
                                />
                            </View>
                        ) : (
                                <View style={styles.quizContainer}>
                                    <Text style={styles.questionCounter}>Question {asked + 1} out of {quizData.length}</Text>
                                    <Text style={styles.question}>{currentQuestion}</Text>
                                    <RadioForm animation>
                                        {currentQuestionOptions.map((obj, i) => (
                                            <RadioButton labelHorizontal key={Math.random()}>
                                                <RadioButtonInput
                                                    obj={obj}
                                                    index={i}
                                                    isSelected={userAnswer === i}
                                                    onPress={this.onPress}
                                                    borderWidth={userAnswer === i ? 3 : 1}
                                                    buttonInnerColor="#007bff"
                                                    buttonOuterColor={userAnswer === i ? '#007bff' : '#000'}
                                                    buttonSize={15}
                                                    buttonOuterSize={25}
                                                />
                                                <RadioButtonLabel
                                                    obj={obj}
                                                    index={i}
                                                    labelHorizontal
                                                    onPress={this.onPress}
                                                    labelStyle={{ fontSize: 18, }}
                                                    labelWrapStyle={{}}
                                                />
                                            </RadioButton>
                                        ))}
                                    </RadioForm>

                                    <View style={{ marginTop: 10 }}>

                                        {quizData.length === asked + 1 ? (
                                            <Button
                                                onPress={() => this.nextQuestion('last')}
                                                title="Finish"
                                                color="#28a745"
                                            />
                                        ) : (
                                            <View>
                                                <Button
                                                    onPress={() => this.nextQuestion()}
                                                    title="Next"
                                                    color="#007bff"
                                                />
   
                                            </View>
                                            )
                                        }
                                    </View>
                                </View>
                            )
                    }
                </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: '#343a40',
    },
    warningText: {
        fontSize: 15,
        color: '#ffc107',
        marginBottom: 10,
    },
    errorText: {
        fontSize: 20,
        color: '#dc3545',
    },
    quizContainer: {
        width: "100%",
        padding: 20
    },
    question: {
        fontSize: 20,
        color: '#343a40',
        marginBottom: 10,
    },
    questionCounter: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#343a40',
        marginBottom: 10,
    },
});
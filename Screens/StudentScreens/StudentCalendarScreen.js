import React from 'react'
import {Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from '../../Navigators/StudentNavigators/Events'
import {Provider as StoreProvider} from 'react-redux'
import storeEvent from '../../reducer/storeEvent'

export default function App(){
  return (
    <StoreProvider store = {storeEvent}>
    <PaperProvider>
      <AppNavigator/>
    </PaperProvider>
    </StoreProvider>
  )
}
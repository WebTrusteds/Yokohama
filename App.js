import React from 'react'
import { StatusBar, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import AuthProvider from './src/contexts/auth'

export default function App() {
  console.disableYellowBox = true
  LogBox.ignoreLogs(['Warning: ...'])

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#181920" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}

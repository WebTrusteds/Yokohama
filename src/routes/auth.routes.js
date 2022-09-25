import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/Login'
import Home from '../pages/Home'
import RecoverPassword from '../pages/RecoverPassword'
import RecoverPasswordRedirect from '../pages/RecoverPasswordRedirect'

const Stack = createNativeStackNavigator()

export default function AppRoutes() {
  return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name="Home"
                component={Home}
                options={
                    {
                      headerShown: false,
                    }
                }
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={
                    {
                      headerShown: false,
                    }
                }
            />
            <Stack.Screen
                name="Recover"
                component={RecoverPassword}
                options={
                    {
                      headerShown: false,
                    }
                }
            />
            <Stack.Screen
                name="RecoverRedirect"
                component={RecoverPasswordRedirect}
                options={
                    {
                      headerShown: false,
                    }
                }
            />
        </Stack.Navigator>
  )
}

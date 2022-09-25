import React, { useState, createContext, useEffect } from 'react'
import { Alert } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
  const navigation = useNavigation()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingAuth, setLoadingAuth] = useState(false)

  const userContent = user

  useEffect(() => {
    console.log(user)
    async function loadStoarge() {
      const storageUser = await AsyncStorage.getItem('@yokohama')
      if (storageUser) {
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
      setLoading(false)
    }
    loadStoarge()
  }, [])

  async function storageUser(data) {
    await AsyncStorage.setItem('@pamela', JSON.stringify(data))
  }

  async function signUp(email, password, name) {
    setLoadingAuth(true)

    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        const [uid] = value.user.uid
        await firestore().collection('users')
          .doc(uid).set({
            name,
            createdAt: new Date(),
          })
          .then(() => {
            const data = {
              uid,
              name,
              email: value.user.email,
            }
            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
            navigation.navigate('Dashboard')
          })
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('O email está em uso.')
        }
        if (error.code === 'auth/weak-password') {
          Alert.alert('A senha não é forte o suficiente.')
        }
        setLoadingAuth(false)
      })
  }

  async function signIn(email, password) {
    setLoadingAuth(true)

    await auth().signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        const [uid] = value.user.uid
        const userProfile = await firestore().collection('users').doc(uid).get()
        const data = {
          uid,
          name: userProfile.data().name,
          email: value.user.email,
        }
        setUser(data)
        storageUser(data)
        setLoadingAuth(false)
        navigation.navigate('Dashboard')
      })
      .catch((error) => {
        if (error.code === 'auth/expired-action-code') {
          Alert.alert('Código de ação expirado.')
        }
        if (error.code === 'auth/invalid-action-code') {
          Alert.alert('Código de ação inválido.')
        }
        if (error.code === 'auth/user-disabled') {
          Alert.alert('Usuário desabilitado.')
        }
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Usuário não encontrado.')
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('E-mail inválido.')
        }
        if (error.code === 'auth/invalid-credential') {
          Alert.alert('Credencial inválida.')
        }
        if (error.code === 'auth/wrong-password') {
          Alert.alert('Senha errada.')
        }
        setLoadingAuth(false)
      })
  }

  async function signOut() {
    await auth().signOut()
    await AsyncStorage.clear()
      .then(() => {
        setUser(null)
      })
  }

  return (
        <AuthContext.Provider
            value={{
              signed: !!user,
              signUp,
              signIn,
              signOut,
              loadingAuth,
              loading,
              user,
              userContent,
              setUser,
              storageUser,
            }}>
            {children}
        </AuthContext.Provider>
  )
}

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Header, HeaderText, HeaderButton } from './style'

export function HeaderBack() {
  const navigation = useNavigation()

  return (
        <Header>
            <HeaderButton onPress={() => navigation.navigate('Login')}>
                <MaterialIcons name='arrow-back' size={30} color='#fff' />
            </HeaderButton>
            <HeaderText>Voltar</HeaderText>
        </Header>
  )
}

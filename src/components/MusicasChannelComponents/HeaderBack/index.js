import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Header, HeaderText, HeaderButton } from './styles'

export function HeaderBack() {
  const navigation = useNavigation()

  return (
        <Header>
            <HeaderButton onPress={() => navigation.navigate('Musicas')}>
                <MaterialIcons name='arrow-back' size={30} color='#171717' />
            </HeaderButton>
            <HeaderText>Voltar</HeaderText>
        </Header>
  )
}

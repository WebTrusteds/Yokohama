import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { 
  Container, 
  Picture, 
  Title, 
  NavBar,
} from './styles'

export default function ImageOpened({ route }) {
  const navigation = useNavigation()
  const { uri } = route.params

  return (
        <Container>
            <Picture source={{ uri }}/>
            <NavBar>
                <TouchableOpacity onPress={() => navigation.navigate('Galeria')}>
                    <MaterialIcons name='arrow-back' size={28} color='#f0f0f0' />
                </TouchableOpacity>
                <Title>Voltar</Title>
            </NavBar>
        </Container>
  )
}

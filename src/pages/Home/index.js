import React from 'react'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import WelcomeJson from '../../assets/Welcome.json'
import { 
  Container, 
  Content,
  Title, 
  Description, 
  Button, 
  ButtonText, 
} from './styles'

export default function Home() {
  const navigation = useNavigation()

  return (
        <Container>
                <Content>
                <LottieView style={{ width: 420, height: 420 }} source={WelcomeJson} resizeMode="contain" autoPlay={true} loop={true} />
                    <Title>Yokohama</Title>
                    <Description>Um cantinho virtual, com sua pessoa especial, venha se divertir e 
                    eternizar todo seu carinho</Description>
                    <Button onPress={() => navigation.navigate('Login')}>
                        <ButtonText>Iniciar</ButtonText>
                    </Button>
                </Content>
        </Container>
  )
}

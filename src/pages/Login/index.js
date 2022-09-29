import React, { useState, useContext } from 'react'
import { 
  Platform, 
  KeyboardAvoidingView, 
  ActivityIndicator, 
  Alert,
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth'
import {
  Container,
  Title,
  Description,
  Inputs,
  TermsContainer,
  TermsButton,
  TermsText,
  Button,
  ButtonText,
  ChangeScreen,
  ChangeScreenText,
  Modal,
  ModalContainer,
  ModalTerms,
  ModalTermsText,
  ModalTermsButton,
  ModalTermsButtonText,
} from './styles'

export default function Login() {
  const [login, setLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [termsCheck, setTermsCheck] = useState(false)
  const [open, setOpen] = useState(false)

  const { signIn, signUp, loadingAuth } = useContext(AuthContext)

  const navigation = useNavigation()

  function toggleLogin() {
    setLogin(!login)
    setName('')
    setEmail('')
    setPassword('')
  }

  async function handleSignIn() {
    if (email === '' || password === '') {
      Alert.alert('PREENCHA TODOS OS CAMPOS')
      return
    }

    await signIn(email, password)
  }

  async function handleSignUp() {
    if (termsCheck === false) {
      Alert.alert('Você precisa aceitar termos e condições')
      return
    }
    if (name === '' || email === '' || password === '') {
      Alert.alert('PREENCHA TODOS OS CAMPOS PARA CADASTRAR')
      return
    }

    await signUp(email, password, name)
  }

  if (login) {
    return (
            <Container>
                <Title>Bem-Vindo!</Title>
                <Description>Por favor inicie com sua conta</Description>

                <KeyboardAvoidingView
                    behavior={Platform.Os === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1, alignItems: 'center', width: '100%' }}
                    keyboardVerticalOffset={80}
                >
                    <Inputs
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder='E-mail'
                        placeholderTextColor='#C6C6CB'
                    />

                    <Inputs
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder='Senha'
                        placeholderTextColor='#C6C6CB'
                        secureTextEntry={true}
                    />

                    <Button onPress={handleSignIn}>
                        {loadingAuth ? (
                            <ActivityIndicator size={20} color='#FFF' />
                        ) : (
                            <ButtonText>Entrar</ButtonText>
                        )}
                    </Button>

                    <ChangeScreen onPress={toggleLogin}>
                        <ChangeScreenText>Ainda não tem uma conta?</ChangeScreenText>
                    </ChangeScreen>
                    <ChangeScreen onPress={() => navigation.navigate('Recover')}>
                        <ChangeScreenText>Esqueceu sua senha?</ChangeScreenText>
                    </ChangeScreen>
                </KeyboardAvoidingView>
            </Container>
    )
  }

  return (
        <Container>
            <Title>Crie uma nova conta</Title>
            <Description>Preencha tudo para continuar</Description>
            <Inputs
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder='Name'
                placeholderTextColor='#C6C6CB'
            />

            <Inputs
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder='Email'
                placeholderTextColor='#C6C6CB'
            />

            <Inputs
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder='Password'
                placeholderTextColor='#C6C6CB'
                secureTextEntry={true}
            />

            <TermsContainer>
              <CheckBox 
                value={termsCheck}
                onValueChange={(newValue) => setTermsCheck(newValue)}
                tintColors={{ true: '#5568FF', false: '#d9d9d9' }}
              />
              <TermsButton onPress={() => setOpen(true)}>
                <TermsText>Aceito termos e condições</TermsText>
              </TermsButton>
            </TermsContainer>

            <Button onPress={handleSignUp}>
                <ButtonText>Criar Conta</ButtonText>
            </Button>

            <ChangeScreen onPress={toggleLogin}>
                <ChangeScreenText>Já possuo uma conta</ChangeScreenText>
            </ChangeScreen>

            <Modal visible={open} animationType='slide' transparent={true}>
              <ModalContainer>
                <ModalTerms>
                  <ModalTermsText>
                  Esse aplicativo terá acesso aos seguintes serviços de seu smartphone:
                  </ModalTermsText>
                  <ModalTermsText>
                  * Galeria;
                  </ModalTermsText>
                  <ModalTermsText>
                  Ao criar sua conta você aceita:
                  </ModalTermsText>
                  <ModalTermsText>
                  * Compartilhar seu endereço de email fornecido;
                  </ModalTermsText>
                  <ModalTermsText>
                  * Ter seus textos / imagens armazenadas em nossos servidores;      
                  </ModalTermsText>
                  <ModalTermsText>
                  Ao criar sua conta você concorda que:
                  </ModalTermsText>
                  <ModalTermsText>
                  * Possui mais de 18 anos;
                  </ModalTermsText>
                  <ModalTermsText>
                  * Não compartilhara dados os imagens de terceiros sem autorização prévia
                  </ModalTermsText>
                </ModalTerms>
                <ModalTermsButton onPress={() => setOpen(false)}>
                  <ModalTermsButtonText>
                    Fechar Termos
                  </ModalTermsButtonText>
                </ModalTermsButton>
              </ModalContainer>
            </Modal>
        </Container>
  )
}

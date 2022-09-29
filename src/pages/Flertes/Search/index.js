import React, { useState, useEffect } from 'react'
import { Keyboard, FlatList } from 'react-native'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { 
  Container, 
  ContainerInput, 
  ButtonBack, 
  Input, 
  ButtonSearch,
} from './styles'
import ChatList from '../../../components/FlertesChannelComponents/ChatList'

export default function FlertesSearch() {
  const navigation = useNavigation()

  const isFocused = useIsFocused()

  const [input, setInput] = useState('')
  const [user, setUser] = useState(null)
  const [chats, setChats] = useState([])

  useEffect(() => {
    const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null
    setUser(hasUser)
  }, [isFocused])

  async function handleSearch() {
    if (input === '') return

    const responseSearch = await firestore()
      .collection('FLERTES_THREADS')
      .where('name', '>=', input)
      .where('name', '<=', input + '\uf8ff')
      .get()
      .then((querySnapshot) => {
        const threads = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            name: '',
            lastMessage: { text: '' },
            ...documentSnapshot.data(),
          }
        })
        setChats(threads)
        setInput('')
        Keyboard.dismiss()
      })
  }

  return (
        <Container>
            <ContainerInput>
                <ButtonBack onPress={() => navigation.goBack()}>
                    <MaterialIcons name='arrow-back' size={28} color='#171717' />
                </ButtonBack>
                <Input
                    placeholder='Procure...'
                    placeholderTextColor="#5555"
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    autoCapitalize={'none'}
                />
                <ButtonSearch onPress={handleSearch}>
                    <MaterialIcons name='search' size={28} color='#171717' />
                </ButtonSearch>
            </ContainerInput>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={chats}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <ChatList data={item} userStatus={user} />}
            />
        </Container>
  )
}

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { 
  Container, 
  Row, 
  Content,
  Header, 
  NameText,
} from './styles'

export default function ChatList({ data, deleteRoom }) {
  const navigation = useNavigation()

  function openChat() {
    navigation.navigate('FlertesMessage', { thread: data })
  }

  return (
        <Container onPress={openChat} onLongPress={() => deleteRoom && deleteRoom()}>
            <Row>
                <Content>
                    <Header>
                        <NameText numberOfLines={1}>{data.name}</NameText>
                    </Header>
                </Content>
            </Row>
        </Container>
  )
}

import React from 'react';
import { Container, Row, Content, Header, NameText } from './styles';

import { useNavigation } from '@react-navigation/native';

export default function ChatList({ data, deleteRoom }) {

    const navigation = useNavigation();

    function openChat() {
        navigation.navigate("TextinhosMessages", { thread: data })
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
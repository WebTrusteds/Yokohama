import React, { useEffect, useMemo, useState } from 'react';
import { Container, MessageBox, User, Name, Message } from './styles';

import auth from '@react-native-firebase/auth';

import storage from '@react-native-firebase/storage';

export default function ChannelMessage({ data }) {
    const user = auth().currentUser.toJSON();

    const [url, setUrl] = useState();

    const isMyMessage = useMemo(() => {
        return data?.user?._id === user.uid
    }, [data])

    useEffect(() => {
        async function loadAvatar() {
            let url = await storage().ref('users').child(data.user._id).getDownloadURL();
            setUrl(url)
        }
        loadAvatar();
    }, [])

    return (
        <Container>
            <MessageBox>
                {url ? (
                    <User source={{ uri: url }} />
                ) : (
                    <User source={require('../../../../src/assets/profile.png')} />
                )}
                <Name>{data?.user?.displayName}</Name>
                <Message>{data.text}</Message>
            </MessageBox>
        </Container>
    )
}

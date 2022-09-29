import React, { useEffect, useMemo, useState } from 'react'
import storage from '@react-native-firebase/storage'
import ProfileDefault from '../../../assets/profile.png'
import { 
  Container, 
  MessageBox, 
  User, 
  Name, 
  Message,
} from './styles'

export default function ChannelMessage({ data }) {
  const [url, setUrl] = useState()

  useEffect(() => {
    async function loadAvatar() {
      const url = await storage().ref('users').child(data.user._id).getDownloadURL()
      setUrl(url)
    }
    loadAvatar()
  }, [])

  return (
        <Container>
            <MessageBox>
                {url ? (
                    <User source={{ uri: url }} />
                ) : (
                    <User source={ProfileDefault} />
                )}
                <Name>{data?.user?.displayName}</Name>
                <Message>{data.text}</Message>
            </MessageBox>
        </Container>
  )
}

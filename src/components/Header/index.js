import React, { useContext, useEffect, useState } from 'react'
import storage from '@react-native-firebase/storage'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth'
import ProfileDefault from '../../assets/profile.png'
import { 
  HeaderContainer, 
  Title, 
  ProfileButton, 
  Profile, 
} from './style'

export function Header() {
  const navigation = useNavigation()
  const { user } = useContext(AuthContext)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    let isActive = true
    async function loadAvatar() {
      try {
        if (isActive) {
          const response = await storage().ref('users').child(user?.uid).getDownloadURL()
          setUrl(response)
        }
      } catch (err) {
        console.log('NAO ENCONTRAMOS NENHUMA FOTO')
      }
    }
    loadAvatar()
    return () => isActive = false
  }, [])

  return (
        <HeaderContainer>
            {url ? (
                <ProfileButton onPress={() => navigation.navigate('Profile')}>
                    <Profile source={{ uri: url }}/>
                </ProfileButton>
            ) : (
                <ProfileButton onPress={() => navigation.navigate('Profile')}>
                    <Profile source={ProfileDefault}/>
                </ProfileButton>
            )}
            <Title>DashBoard</Title>
        </HeaderContainer>
  )
}

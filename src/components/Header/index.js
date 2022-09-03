import React, { useContext, useEffect, useState } from 'react';
import { HeaderContainer, Title, ProfileButton, Profile } from './style';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';
import storage from '@react-native-firebase/storage';

export function Header() {

    const navigation = useNavigation();

    const { user } = useContext(AuthContext);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        let isActive = true;

        async function loadAvatar() {
            try {
                if (isActive) {
                    let response = await storage().ref('users').child(user?.uid).getDownloadURL();
                    setUrl(response);
                }
            } catch (err) {
                console.log("NAO ENCONTRAMOS NENHUMA FOTO")
            }
        }

        loadAvatar();

        return () => isActive = false;
    }, [])

    return (
        <HeaderContainer>
            {url ? (
                <ProfileButton onPress={() => navigation.navigate('Profile')}>
                    <Profile
                        source={{ uri: url }}
                    />
                </ProfileButton>

            ) : (
                <ProfileButton onPress={() => navigation.navigate('Profile')}>
                    <Profile
                        source={require('../../../src/assets/profile.png')}
                    />
                </ProfileButton>

            )}
            <Title>DashBoard</Title>
        </HeaderContainer>
    )
}
import React from 'react';
import { Button, View, Content } from  './styles';

import { useNavigation } from '@react-navigation/native';

export default function FabButton({ setVisible, userStatus }) {

    const navigation = useNavigation();

    function handleNavigateButton() {
        userStatus ? setVisible() : navigation.navigate('SignIn')
    }

    return (
        <Button
            activeOpacity={0.9}
            onPress={handleNavigateButton}
        >
            <View>
                <Content>+</Content>
            </View>
        </Button>
    )
}
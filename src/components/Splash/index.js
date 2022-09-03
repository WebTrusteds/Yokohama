import React from 'react';
import { Container, Logo, Loading } from './styles';
import heart from '../../assets/heart.png';

function SplashScreen() {
    return (
        <Container>
            <Logo source={heart} />
            <Loading />
        </Container>
    )
}

export default SplashScreen;
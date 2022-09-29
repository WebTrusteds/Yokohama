import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #181920;
`

export const Content = styled.View`
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 0;
`

export const Title = styled.Text`
    font-family: 'Poppins-Bold';
    color: #fff;
    font-size: 35px;
`

export const Description = styled.Text`
    font-family: 'Poppins-Regular';
    color: #fff;
    text-align: center;
    margin: 15px;
    font-size: 15px;
`

export const Button = styled.TouchableOpacity`
    background-color: #5568FF;
    width: 90%;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 10px;
`

export const ButtonText = styled.Text`
    font-family: 'Poppins-Regular';
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`

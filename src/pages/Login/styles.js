import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #181920;
    align-items: center;
`

export const Title = styled.Text`
    font-family: 'Poppins-Regular';
    font-weight: bold;
    margin-top: 90px;
    font-size: 25px;
    color: #fff;
`

export const Description = styled.Text`
    font-family: 'Poppins-Regular';
    color: #505157;
    margin-bottom: 50px;
`

export const Inputs = styled.TextInput`
    font-family: 'Poppins-Regular';
    color: #fff;
    background-color: #252A34;
    border-radius: 10px;
    padding-left: 15px;
    width: 90%;
    height: 60px;
    margin-bottom: 20px;
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

export const ChangeScreen = styled.TouchableOpacity`

`

export const ChangeScreenText = styled.Text`
    color: #fff;
    font-family: 'Poppins-Regular';
    font-size: 16px;
    margin-bottom: 15px;
`

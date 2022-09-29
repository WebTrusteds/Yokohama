import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #181920;
`

export const Content = styled.View`
    align-items: center;
`

export const EmailContent = styled.View`
    align-items: center;
    margin-top: 50px;
`

export const Title = styled.Text`
    font-family: 'Poppins-Regular';
    font-weight: bold;
    margin-left: 20px;
    font-size: 25px;
    color: #fff;
    margin-top: 30%;
    margin-bottom: 5px;
`

export const Description = styled.Text`
    font-family: 'Poppins-Regular';
    font-weight: 500;
    margin-left: 20px;
    font-size: 16px;
    color: #C6C6CB;
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

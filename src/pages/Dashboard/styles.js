import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #181920;
`

export const DashBoardPanel = styled.View.attrs({
  marginTop: Platform.OS === 'android' ? 20 : 15,
})`
    flex: 1;
    display: flex;
`

export const IndroductionText = styled.Text`
    font-family: 'Poppins-Bold';
    font-weight: bold;
    text-align: left;
    color: #fff;
    font-size: 26px;
    margin-left: 20px;
`

export const BooksContainer = styled.ScrollView`

`

export const Button = styled.TouchableOpacity`
    background-color: #252A34;
    border-width: 1.5;
    border-color: #303030;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 4%;
    display: flex;
    padding: 20px;
    border-radius: 13px;
`

export const ButtonText = styled.Text`
    font-family: 'Poppins-Bold';
    color: #f0f0f0;
    font-weight: bold;
    position: absolute;
    margin-left: 35%;
    margin-top: 9%;
    font-size: 25px;
`
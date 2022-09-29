import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #181920;
`

export const NotificationList = styled.ScrollView`
    margin: 30px;
`

export const HourMatchedContainer = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: #252A34;
    border-color: #303030;
    padding-left: 10px;
    padding-right: 30%;
    border-width: 1.5px;
    border-radius: 13px;
    height: 60px;
`

export const HourMatchedText = styled.Text`
    font-family: 'Poppins-Bold';
    padding-left: 15px;
    color: #f0f0f0;
`

import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #181920;
`

export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;
`

export const ButtonBack = styled.TouchableOpacity`
  width: 13%;
  background-color: #FFE2A2;
  border-width: 3px;
  border-radius: 4px;
  border-color: #171717;
  align-items: center;
  justify-content: center;
`

export const Input = styled.TextInput`
  background-color: #252A34;
  color: #fff;
  margin-left: 10px;
  height: 50px;
  width: 60%;
  border-radius: 4px;
  padding: 5px;
`

export const ButtonSearch = styled.TouchableOpacity`
  width: 13%;
  background-color: #FFE2A2;
  border-width: 3px;
  border-radius: 4px;
  border-color: #171717;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`

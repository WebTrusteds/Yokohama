import styled from 'styled-components'

export const Container = styled.View`
  flex: 1%;
`

export const ModalButton = styled.TouchableWithoutFeedback`

`

export const Modal = styled.View`
  flex: 1%;
`

export const ModalContent = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding: 15px;
`

export const Title = styled.Text`
  text-align: center;
  color: #171717;
`

export const Input = styled.TextInput`
  color: #171717;
  border-radius: 4px;
  height: 45px;
  background-color: #f0f0f0;
  margin-right: 15px;
  margin-left: 15px;
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const ButtonCreate = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: #6f00ef;
  height: 45px;
  align-items: center;
  justify-content: center;
`

export const BackButton = styled.TouchableOpacity`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: #f0f0f0;
`

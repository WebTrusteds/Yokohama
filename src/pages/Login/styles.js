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

export const TermsContainer = styled.View`
  width: 100%;
  left: 0;
  padding-left: 15px;
  flex-direction: row;
  margin-bottom: 20px;
`

export const TermsButton = styled.TouchableWithoutFeedback`
  
`

export const TermsText = styled.Text`
  color: #fff;
  font-size: 17px;
  margin-top: 3px;
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

export const Modal = styled.Modal`

`

export const ModalContainer = styled.View.attrs({
  elevation: 10,
})`
    width: 90%;
    height: 70%;
    bottom: 15%;
    top: 15%;
    left: 5%;
    right: 5%;
    border-radius: 15px;
    background-color: #181920;
    position: absolute;
`

export const ModalTerms = styled.ScrollView`
    width: 90%;
    height: 100%;
    top: 2%;
    left: 5%;
    right: 5%;
    border-radius: 15px;
    padding: 10px;
    background-color: #252A34;
`

export const ModalTermsText = styled.Text`
    font-family: 'Poppins-Regular';
    color: #fff;
`

export const ModalTermsButton = styled.TouchableOpacity`
    background-color: #5568FF;
    width: 90%;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    left: 5%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`
export const ModalTermsButtonText = styled.Text`
    font-family: 'Poppins-Regular';
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`

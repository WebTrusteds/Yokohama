import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #181920;
`;

export const Header = styled.View`
    flex-direction: row;
    padding: 20px 10px 20px 10px;
    background-color: #252A34;
`;

export const ButtonBack = styled.TouchableOpacity`
    background-color: #FFE2A2;
    border-width: 3px;
    border-color: #171717;
    padding: 5px;
    border-radius: 5px;
`;

export const Title = styled.Text`
    font-family: 'Poppins-Bold';
    text-align: center;
    margin-left: 25px;
    font-size: 26px;
    color: #f0f0f0;
`;

export const ProfileArea = styled.View`

`;

export const ProfileButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
`;

export const ProfileImg = styled.Image`
    width: 250px;
    height: 250px;
    border-radius: 500px;
    margin: 20px;
`;

export const InfoBox = styled.View`
   display: flex;
   align-self: center;
   background-color: #252A34;
   width: 90%;
   height: 60px;
   border-radius: 13px;
   padding: 20px;
   margin: 10px;
`;

export const Info = styled.TouchableOpacity`
    height: 50px;
`;

export const InfoText = styled.Text`
    font-family: 'Poppins-Bold';
    color: #f0f0f0;
    font-weight: bold;
    font-size: 17px;
`;

export const Button = styled.TouchableOpacity`
   display: flex;
   align-self: center;
   align-items: center;
   justify-content: center;
   background-color: #FFE2A2;
   width: 90%;
   height: 60px;
   border-radius: 13px;
   padding: 20px;
   margin: 10px;
`;

export const ButtonText = styled.Text`
    font-family: 'Poppins-Bold';
    color: #000000;
    font-weight: bold;
    font-size: 17px;
`;

export const Modal = styled.Modal`

`;

export const ModalContainer = styled.KeyboardAvoidingView`
    width: 100%;
    height: 70%;
    background-color: #252A34;
    position: absolute;
    bottom: 0;
    align-items: center;
    justify-content: center;
`;

export const ModalButtonBack = styled.TouchableOpacity`
    background-color: #FFE2A2;
    border-width: 3px;
    border-color: #171717;
    padding: 5px;
    border-radius: 5px;
    position: absolute;
    top: 10px;
    left: 10px;
`;

export const ModalInput = styled.TextInput`
   font-family: 'Poppins-Regular';
   background-color: #181920;
   color: #f0f0f0;
   width: 90%;
   height: 60px;
   border-radius: 13px;
   padding: 20px;
`;

export const ButtonModal = styled.TouchableOpacity`
   display: flex;
   align-self: center;
   align-items: center;
   justify-content: center;
   background-color: #FFE2A2;
   width: 90%;
   height: 60px;
   border-radius: 13px;
   padding: 20px;
   margin: 10px;
`;

export const ButtonModalText = styled.Text`
    font-family: 'Poppins-Bold';
    color: #000000;
    font-weight: bold;
    font-size: 17px;
`;
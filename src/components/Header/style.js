import styled from "styled-components";

export const HeaderContainer = styled.View`
    width: 100%;
    padding-bottom: 40px;
    margin-top: 20px;
    margin-left: 20px;
    display: flex;
    background-color: #181920;
`;

export const ProfileButton = styled.TouchableOpacity`

`;

export const Profile = styled.Image.attrs({
    borderRadius: 100,
})`
    width: 45px;
    height: 45px;
    position: absolute;
    top: -5;
    right: 50;
`;

export const Title = styled.Text`
    font-family: 'Poppins-Bold';
    font-weight: bold;
    font-size: 22px;
    position: absolute;
    top: 10;
    color: #fff;
`;
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  background-color: #181920;
  flex: 1%;
`;

export const NavBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px 20px 10px;
  background-color: #252A34;
`;

export const NavBarLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
    background-color: #FFE2A2;
    border-width: 3px;
    border-color: #171717;
    padding: 5px;
    border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  font-family: 'Poppins-Bold';
  color: #f0f0f0;
  padding-left: 10px;
`;
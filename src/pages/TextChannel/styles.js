import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #181920;
`;

export const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #181920;
`;

export const ContainerInput = styled.View`
 flex-direction: row;
 margin: 10px;
 align-items: flex-end;
`;

export const MainContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #252A34;
  flex: 1;
  border-radius: 5px;
  margin-right: 10px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #f0f0f0;
  margin: 0px 10px 0px 10px;
  height: 48px;
`;

export const ButtonContainer = styled.View`
  background-color: #252A34;
  height: 48px;
  align-items: center;
  justify-content: center;
  width: 48px;
  border-radius: 5px;
`;
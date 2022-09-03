import styled from 'styled-components';

export const Container = styled.View`
  padding: 10px;
`;

export const MessageBox = styled.View`
  background-color: #252A34;
  border-radius: 5px;
  padding: 10px;
  elevation: 2;
`;

export const User = styled.Image`
  width: 20px;
  height: 20px;
  position: absolute;
  margin: 10px;
  border-radius: 100px;
`;

export const Name = styled.Text`
  color: #fff;
  font-family: Poppins-Bold;
  font-weight: bold;
  margin: 0px 0px 5px 30px;
`;

export const Message = styled.Text`
  color: #f0f0f0;
  font-family: Poppins-Regular;
`;
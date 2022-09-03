import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #181920;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 340px;
  height: 278px;
`;

export const Loading = styled.ActivityIndicator.attrs({
    width: 50,
    height: 50,
})`
  color: #f0f0f0;
  margin-top: 50px;
`;
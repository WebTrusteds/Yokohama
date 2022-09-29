import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Picture = styled.Image`
  flex: 1;
`

export const NavBar = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: row;
  align-items: center;
  padding: 10px 0px 10px 10px;
  position: absolute;
  width: 100%;
`

export const Title = styled.Text`
  margin-left: 20px;
  font-family: 'Poppins-Bold';
  font-weight: bold;
  font-size: 20px;
  color: #f0f0f0;
`

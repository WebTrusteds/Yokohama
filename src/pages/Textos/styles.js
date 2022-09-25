import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #181920;
`

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 10px 20px 10px;
  background-color: #252A34;
`

export const HeaderLeft = styled.View`
  flex-direction: row;
  align-items: flex-end;
`

export const HeaderTitle = styled.Text`
  font-family: 'Poppins-Bold';
  margin-left: 15px;
  font-size: 26px;
  color: #f0f0f0;
`

export const HeaderButtonBack = styled.TouchableOpacity`
    background-color: #FFE2A2;
    border-width: 3px;
    border-color: #171717;
    padding: 5px;
    border-radius: 5px;
`

export const HeaderButtonSearch = styled.TouchableOpacity`
    background-color: #FFE2A2;
    border-width: 3px;
    border-color: #171717;
    padding: 5px;
    border-radius: 5px;
`

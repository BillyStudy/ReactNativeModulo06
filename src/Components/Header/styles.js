import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Header = styled.View`
  flex-direction: row;
  height: 60px;
  padding: 10px 30px;
  background-color: #262626;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fafafa;
  font-family: 'Poppins-Bold';
  text-align: center;  
  font-size: 18px;
`;


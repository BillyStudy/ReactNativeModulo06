import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Header = styled.View`
  flex-direction: row;
  height: 80px;
  padding: 20px 30px;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fafafa;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
`;

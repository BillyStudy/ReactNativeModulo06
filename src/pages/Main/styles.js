import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #fafafa;
`;

export const Form = styled.View`
  padding: 20px 30px;
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 0.3px;
  background-color: #333333;
  border-color: #ccc;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  background-color: #fafafa;
  border-radius: 4px;
  padding: 0 15px;
  border: 0.5px solid #fafafa;
  font-family: 'Poppins-Regular';
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 4px;
`;

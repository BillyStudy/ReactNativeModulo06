import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #000;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 1px;
  margin-left: 10px;
  padding: 0 4px;
`;

export const UserCard = styled.View`
  padding: 20px 15px;
  background-color: #222;
  margin: 5px 15px;
  min-height: 400px;
  width: 90%;
  border-radius: 3px;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 200px;
  width: 200px;
  border-radius: 360px;
  background-color: #eee;
`;
export const Name = styled.Text`
  font-family: 'Poppins-Medium';
  color: white;
  font-size: 20px;
  margin-top: 15px;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-style: italic;
  line-height: 18px;
  color: #999;
  font-size: 12px;
  max-width: 180px;
  margin-top: 5px;
`;

export const ProfileButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: #222;
  margin-left: 10px;
`;

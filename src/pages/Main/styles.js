import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

export const Form = styled.View`
  padding: 20px 15px;
  flex-direction: row;
  padding-bottom: 20px;
  background-color: #000;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  background-color: #fff;
  border-radius: 1px;
  padding: 0 15px;
  border: 0.5px solid #fafafa;
  font-family: 'Poppins-Regular';
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 1px;
  margin-left: 10px;
  padding: 0 4px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const UserList = styled.View`
  padding: 20px 15px;
  flex-direction: row;
  background-color: #222;
  margin: 5px 15px;
  border-radius: 2px;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 32px;
  background-color: #eee;
`;
export const Name = styled.Text`
  font-family: 'Poppins-Medium';
  color: white;
  font-size: 14px;
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

import React from 'react';
import {View} from 'react-native';
import Header from '../../Components/Header';

import {Container, SubmitButton, UserCard, Name, Avatar, Bio} from './styles';

export default function User({navigation}) {
  const {user} = navigation.state.params;
  return (
    <>
      <Header title={'Perfil'} />
      <Container>
        <UserCard>
          <Avatar source={{uri: user.avatar}} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </UserCard>
      </Container>
    </>
  );
}

import React, {Component} from 'react';
import {Keyboard, View, ActivityIndicator} from 'react-native';

import {
  Container,
  Input,
  SubmitButton,
  Form,
  List,
  UserList,
  Name,
  Avatar,
  Bio,
  ProfileButton,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import IconGit from 'react-native-vector-icons/FontAwesome';

import Header from '../../Components/Header';

import Api from '../../services/api';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  handleSubmit = async () => {
    const {users, newUser} = this.state;

    this.setState({loading: true});
    const response = await Api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };
    Keyboard.dismiss;

    this.setState({
      users: [...users, data],
      newUser: '',
      loading: false,
    });
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');
    if (users) {
      this.setState({users: JSON.parse(users)});
    }
  }
  async componentDidUpdate(_, prevState) {
    if (prevState.users !== this.state.users) {
      AsyncStorage.setItem('users', JSON.stringify(this.state.users));
    }
  }

  handleNavigate = user => {
    const {navigation} = this.props;
    navigation.navigate('User', {user});
  };

  render() {
    const {users, newUser, loading} = this.state;
    return (
      <>
        <Header title={'Github'} />
        <Form>
          <Input
            autoCorret={false}
            autoCapitalize="none"
            placeholder="Pesquisar usuário"
            onChangeText={text => this.setState({newUser: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleSubmit}
            value={newUser}
          />
          <SubmitButton onPress={this.handleSubmit}>
            <Icon name={'add'} color="#333" size={40} />
          </SubmitButton>
        </Form>
        <Container>
          <List
            data={users}
            keyExtractor={user => user.login}
            renderItem={({item}) => (
              <UserList>
                <Avatar source={{uri: item.avatar}} />
                <View>
                  <Name>{item.name}</Name>
                  <Bio>{item.bio}</Bio>
                </View>
                <ProfileButton
                  loading={loading}
                  onPress={() => this.handleNavigate(item)}>
                  {loading ? (
                    <ActivityIndicator color="#fafafa" />
                  ) : (
                    <IconGit name={'github-square'} color="#eee" size={40} />
                  )}
                </ProfileButton>
              </UserList>
            )}
          />
        </Container>
      </>
    );
  }
}

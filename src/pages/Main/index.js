import React, { Component } from 'react';
import { Keyboard } from 'react-native';

import { Container, Input, SubmitButton, Form } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../Components/Header';

import Api from '../../services/api';


export default class Main extends Component {
  state={
    newUser: '',
    users: [],
  }

  handleSubmit = async () => {
    const { users, newUser } = this.state; 
    const response = await Api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url
    };
    Keyboard.dismiss;

    this.setState({
      users: [...users, data],
      newUser: ''
    });

    
  }

  render() {
    const { users, newUser } = this.state; 
    return (
      <>
        <Header />
        <Form>
            <Input autoCorret={false} autoCapitalize="none" placeholder='Adicionar Usuário'
                  onChangeText={text => this.setState({ newUser: text})}
                  returnKeyType="send"
                  onSubmitEditing={this.handleSubmit}
                  value={newUser}
            />
            <SubmitButton onPress={this.handleSubmit}>
              <Icon name={"add"} color="#333" size={40} />
            </SubmitButton>
          </Form>
        <Container>

          
        </Container>
      </>
    );
  }
}

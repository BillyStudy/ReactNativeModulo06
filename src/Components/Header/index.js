import React, {Component} from 'react';

import {Header, Title} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Main extends Component {
  render() {
    return (
      <Header>
        {this.props.backBottom && (
          <Icon name="ios-arrow-back" color={'#fafafa'} size={25} />
        )}
        <Title>{this.props.title}</Title>
      </Header>
    );
  }
}

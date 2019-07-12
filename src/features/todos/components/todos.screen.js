import React from 'react';
//import {Platform, StyleSheet, Text, View} from 'react-native';
import AddTodo from './addTodo.cmp';
import ListTodos from './listTodos.cmp';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Card, CardItem } from "native-base";
import { DrawerActions } from 'react-navigation';

export default class TodosScreen extends React.PureComponent {

  render() {
    console.log('TodosScreen');
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Tareas</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>

          <AddTodo {...this.props}/>
          <ListTodos {...this.props}/>
          
        </Content>
      </Container>
    );
  }
}



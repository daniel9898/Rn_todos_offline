import React from "react";
import { DrawerActions } from 'react-navigation';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { createTables } from '../features/db';

export default class Dashboard extends React.Component {

  constructor(){
    super()
    createTables();
  }

  render() {
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
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Una app para agregar tareas en modo offline!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Todos")}>
            <Text>Todos</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}


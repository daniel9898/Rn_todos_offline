import React from "react";
import { Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Title, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Footer, FooterTab } from 'native-base';


export default class Sidebar extends React.Component {

  _keyExtractor = (item, index) => item.id.toString();

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <Container 
        bounces={false}
        style={{ flex: 1, top: -1 }}>
        

        <Image
          style={{width: 280, height: 240}}
          source={{uri: 'https://wallpapercave.com/wp/wp1882671.jpg'}}
        />
        
        <Content padder>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text onPress={this.navigateToScreen('Dashboard')} >Home</Text>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active name="list" />
              </Button>
            </Left>
            <Body>
              <Text onPress={this.navigateToScreen('Todos')} >Listado</Text>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>No anda</Text>
            </Body>
          </ListItem>

        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }

}


/*
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Section 1
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Todos')}>
              Tareas
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Section 2
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Dashboard')}>
                Dashboard
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                Page3
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
*/

const styles = {
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
};
import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

export default class AddTodo extends Component {

  state = {
    text: ''
  }

  addTodo = text => {
    this.props.todosActions.addTodo(text);
    this.setState({text: ''})
  }

  render() {

    return (
      <View style={styles.container}>
        <TextInput 
          onChangeText={text => this.setState({text: text})}
          style={styles.input}
          placeholder='Ingrese una tarea...' 
        />
        <TouchableOpacity  onPress={() => this.addTodo(this.state.text)}>
          <View style={styles.button}>
            <Icon style={styles.icon} name="add"/>
          </View>
        </TouchableOpacity >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#00CCCC',
    padding: 5,
    fontSize: 20
  
  },
  button: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    //borderLeftWidth: 10
  },

  icon : {
    padding: 10,
  }
});

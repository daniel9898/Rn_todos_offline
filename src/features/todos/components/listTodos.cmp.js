import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class ListTodos extends Component {

  render() {
    console.log( this.props);
    return (
      <View style={styles.container}>
        {
          this.props.todos.map(todo => {
            <TouchableOpacity>
              <Text>{todo.text}</Text>
            </TouchableOpacity >
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
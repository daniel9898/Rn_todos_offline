import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import todoDb from '../todos.db';

export default class ListTodos extends Component {
  
  render() {
    console.log('this.props ',this.props);
    return (
      <View style={styles.container}>
        {
          this.props.todos.list.map((todo,index) => {  
            return  <Text 
                      key={index}
                      style={styles.text}
                    >
                    - {todo.name}
                    </Text>
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    padding: 4,
    fontSize: 25,
  }
});
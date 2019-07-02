import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import todoDb from '../todos.db';

export default class ListTodos extends Component {

  constructor(){
    super()
    //ver como devolver los datos y donde ponerlo para que renderize cada vez que se agrega uno
    todoDb.get(); 
  }

  render() {
    console.log( this.props);
    return (
      <View style={styles.container}>
        {
          this.props.todos.list.map((todo,index) => {  
            return  <Text 
                      key={index}
                      style={styles.text}
                    >
                    - {todo.text}
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
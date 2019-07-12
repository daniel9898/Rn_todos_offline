import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class AddTodo extends React.PureComponent {

  state = {
    text: ''
  }

  addTodo = text => {
    this.props.todosActions.addTodo(text);
    this.setState({text: ''})
    this.textInput.clear();
  }

  render() {
     console.log('AddTodo');
    return (
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            ref={input => { this.textInput = input }} 
            placeholder="Ingrese una tarea..."
            onChangeText={text => this.setState({text: text})}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity  onPress={() => this.addTodo(this.state.text)}>
            <Icon style={styles.Icon} name="ios-add" size={50} color="#000"/>
          </TouchableOpacity >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
  },
  Icon: {
      padding: 10,
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      backgroundColor: '#fff',
      color: '#424242',
      fontSize: 20
  },
})


import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import todoDb from '../todos.db';

export default class ListTodos extends Component {

  _keyExtractor = (item, index) => item.id.toString();

  deleteTodo = async id => {
    await this.props.todosActions.deleteTodo(id);
    this.props.todosActions.fetchTodos();
  }

  renderItem = item => {
    return (
      <View style={styles.textSection}>
        <Text style={styles.item}>
          {item.item.name}
        </Text>
        <TouchableOpacity onPress={() => this.deleteTodo(item.item.id)}>
          <Icon style={styles.Icon} name="ios-trash" size={30} color="red"/>
        </TouchableOpacity>
      </View>)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.todos.list}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  textSection: {
      flexDirection: 'row',
      backgroundColor: '#fff',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  text: {
    padding: 4,
    fontSize: 25,
  }
});

//http://fullstackdeveloper.info/redux-state-with-immutable-js-normalizr-and-reselect/
//http://untangled.io/immutable-js-get-set-update-and-delete-data-from-maps/
//https://stackoverflow.com/questions/30450615/immutable-js-converting-fetched-data-to-immutable

import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import todoDb from '../todos.db';

export default class ListTodos extends React.PureComponent {

  _keyExtractor = (item, index) => item.id.toString();

  deleteTodo = async id => {
    await this.props.todosActions.deleteTodo(id);
    this.props.todosActions.fetchTodos();
  }

  renderItem = item => {
    return (
            <ListItem
              roundAvatar
              title={`${item.item.name}`}
              subtitle={item.item.status}
              rightIcon={{ name: 'remove-circle'}}
              containerStyle={{ borderBottomWidth: 0 }}
              onPress={() => this.deleteTodo(item.item.id)}
            />
          )
 
  }
  
  render() {
     console.log('ListTodos');
    const todos = this.props.todos.get('list').toJS();

    /*todos.map(t => {
      console.log('id --> ',t.get('id'));
      console.log('name --> ',t.get('name'));
    })*/

    return (
      <View style={styles.container}>
        <FlatList
          data={todos}
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
   
  },

});

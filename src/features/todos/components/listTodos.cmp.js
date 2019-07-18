//http://fullstackdeveloper.info/redux-state-with-immutable-js-normalizr-and-reselect/
//http://untangled.io/immutable-js-get-set-update-and-delete-data-from-maps/
//https://stackoverflow.com/questions/30450615/immutable-js-converting-fetched-data-to-immutable
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { SwipeListView } from 'react-native-swipe-list-view';
import todoDb from '../todos.db';

/*
VOY CREAR UNA PROPIEDAD SELECTED Y CON ESO VOY A MANEJAR EL UPDATE
COMO LO HACEN EN VOLUNTARIADO
YA HICE LA CONSTANTE Y LA ACCION
FALTA EL REDUCER E IMPLEMENTARLO EN LA LISTA CUANDO SE SELECCIONA 

*/

export default class ListTodos extends React.PureComponent {

  constructor(props){
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  _keyExtractor = (item, index) => item.id.toString();

  async deleteTodo(todo){
    await this.props.todosActions.deleteTodo(todo.id);
    this.props.todosActions.fetchTodos();
  }

  renderItem = item => {
    console.log('item ',item);
    return (
            <ListItem
              roundAvatar
              title={`${item.item.name}`}
              subtitle={item.item.status}
              rightIcon={{ name: 'check', color:'green'}}
              containerStyle={{ borderBottomWidth: 0 }}
              onPress={() => this.props.navigation.navigate("Edit", { todo: item.item })}
            />
          )
  }

  windowConfirm = (title, msg, callbackOk, task) => {
    Alert.alert(
      title,
      msg,
      [
        {text: 'Cancelar', onPress: () => { return false }, style: 'cancel'},
        {text: 'OK', onPress: () => { callbackOk != null ? callbackOk(task) : 'sin callback' } },
      ],
    )
  }

  renderHiddenItem = ({ item, rowMap }) => {
    return (
      <View style={styles.rowBack}>
        <View>
             <Icon    
                onPress={() => this.windowConfirm(`${item.name}`,'Esta seguro que desea eliminar esta tarea ?',this.deleteTodo, item ) }
                key={item.id}
                name='ios-trash'
                size={35}
                color='red'
                style={{ height: 35, width: 35 }}
                backgroundColor="white" />
        </View>
        <View>
             <Icon
                onPress={() => this.props.navigation.navigate("Edit", { todo: item })}
                key={item.id}
                name='ios-create'
                size={35}
                color='orange'
                style={{ height: 35, width: 35 }}
                backgroundColor="white" />
        </View>
      </View>
    )
  }

  render() {
    const todos = this.props.todos.get('list').toJS();

    return (
      <View style={styles.container}>
        <SwipeListView
          data={todos}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
          renderHiddenItem={this.renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },

});


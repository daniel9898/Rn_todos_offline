import React from 'react';
import { StyleSheet, Text, View, Alert, VirtualizedList } from 'react-native';
import { SwipeRow, Button } from 'native-base';
import Icon from "react-native-vector-icons/Ionicons";
import todoDb from '../todos.db';

export default class ListTodos extends React.PureComponent {

  constructor(props){
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.getItemBody = this.getItemBody.bind(this);
    this.getHideElementLeft = this.getHideElementLeft.bind(this);
    this.getHideElementRight = this.getHideElementRight.bind(this);
  }

  async deleteTodo(todo){
    await this.props.todosActions.deleteTodo(todo.id);
    this.props.todosActions.fetchTodos();
  }


  renderItem = item => {
    const todo = item.item;
    return (
      <SwipeRow
        leftOpenValue={75}
        rightOpenValue={-75}
        left={this.getHideElementLeft(todo)}
        body={this.getItemBody(todo)}
        right={this.getHideElementRight(todo)}
      />
    )
  }

  getHideElementLeft = todo => {
    return (
      <Button danger onPress={
        () =>  this.Confirm(`${todo.get('name')}`,
                            'Esta seguro que desea eliminar esta tarea ?',
                            this.deleteTodo, todo)
      }>
        <Icon name="ios-trash" size={30}/>
      </Button>
    )
  }

  getItemBody = todo => {
    return (
      <View style={{marginLeft: 10, marginRight: 10}}>
        <Text style={{fontSize: 15, color: 'black'}}>{ todo.get('name') }</Text>
        <Text>{ todo.get('status') }</Text>
      </View>
    )
  }

  getHideElementRight = todo => {
    return (
      <Button success onPress={() => this.props.navigation.navigate("Edit", { todo })}>
        <Icon name="ios-add" size={30}/>
      </Button>
    )
  }

  Confirm = (title, msg, callbackOk, task) => {
    Alert.alert(
      title,
      msg,
      [
        {text: 'Cancelar', onPress: () => { return false }, style: 'cancel'},
        {text: 'OK', onPress: () => { callbackOk != null ? callbackOk(task) : 'sin callback' } },
      ],
    )
  }

  render() {
    const todos = this.props.todos.get('list');
    return (
      <View style={styles.container}>
          <VirtualizedList
            data={todos}
            getItemCount={data => data.size}
            getItem={(data, index) => data.get(index.toString())}
            keyExtractor={(item, index) => item.get('id').toString()}
            renderItem={this.renderItem}
          />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});



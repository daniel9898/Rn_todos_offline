import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Add from './add.component';
import List from './list.component';

export default class TodosScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ESTO ES TodosScreen!</Text>
        <Add />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from "react-native-elements";

const InputWrapper = props => {
  const { name, label, error, onChange, onTouch, ...rest } = props;

  handleChange = value => {
    onChange(name, value);
  };

  handleTouch = () => {
    onTouch(name);
  };

  return (
    <View style={styles.root}>
      <Input
        label={label}
        errorMessage={error}
        //leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        errorStyle={{ color: 'red' }}
        onChangeText={handleChange}
        onBlur={handleTouch}
        placeholder={label}
        {...rest}
    />
    </View>
  )

}

const styles = StyleSheet.create({
  root: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 3,
  },
});

export default InputWrapper;
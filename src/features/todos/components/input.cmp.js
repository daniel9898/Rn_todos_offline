import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from "react-native-elements";

export default class InputWrapper extends PureComponent {
  _handleChange = value => {
    this.props.onChange(this.props.name, value);
  };

  _handleTouch = () => {
    this.props.onTouch(this.props.name);
  };

  render() {
    const { label, error, ...rest } = this.props;
    return (
	    <View style={styles.root}>
		    <Input
			    label={label}
			    errorMessage={error}
			    //leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
			    errorStyle={{ color: 'red' }}
			    onChangeText={this._handleChange}
			    onBlur={this._handleTouch}
			    placeholder={label}
			    {...rest}
			/>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 3,
  },
});

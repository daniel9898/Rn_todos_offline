import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputWrapper from './input.cmp';
import Icon from "react-native-vector-icons/Ionicons";

const api = user =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.email === 'hello@gmail.com') {
        reject({ email: 'Email already use' });
      } else {
        resolve();
      }
    }, 3000);
  });

export default class FormTodo extends React.Component {

  constructor(props){
    super(props)
    console.log('PARAMS ', props.navigation.getParam('todo'));
    
  }

  _handleSubmit = async (values, bag) => {
    console.log('values ',values);
     console.log('bag ',bag);
  
    try {
      await api(values);
      Alert.alert('Welcome');
    } catch (error) { 
      bag.setSubmitting(false);
      bag.setErrors(error);
    }
  };

  render() {
    const todo = this.props.navigation.getParam('todo').item;

    return (
      <View style={styles.container}>
        <Formik
          initialValues={todo}
          onSubmit={this._handleSubmit.bind(this)}

          validationSchema={Yup.object().shape({
            name: Yup.string()
              .min(4)
              .required('El nombre es requerido'),
            status: Yup.string()
              .min(6)
              .required('El estado es requerido'),
          })}

          render={({
            values,
            handleSubmit,
            setFieldValue,
            errors,
            touched,
            setFieldTouched,
            isValid,
            isSubmitting,
          }) => (

            <React.Fragment>
              <InputWrapper
                label="Nombre"
                autoCapitalize="none"
                value={values.name}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="name"
                error={touched.name && errors.name}
              />
              <InputWrapper
                label="Estado"
                autoCapitalize="none"
                value={values.status}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="status"
                error={touched.status && errors.status}
              />
              <Button
                icon={
                  <Icon
                    name="ios-send"
                    size={30}
                    color="white"
                  />
                }
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                title="Enviar"
                onPress={handleSubmit}
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
              />
            </React.Fragment>

          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button:{
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between'
  },

  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',

  },
});
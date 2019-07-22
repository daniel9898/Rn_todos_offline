import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Header, Left, Body, Title, Right, Container, Content, Icon } from "native-base";
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputWrapper from './input.cmp';
//import Icon from "react-native-vector-icons/Ionicons";
import { DrawerActions } from 'react-navigation';

export default class FormTodo extends React.PureComponent {

  constructor(props){
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  //USAREMOS EL FORMULARIO SIN REDUX ,MIENTRAS NO NECESITEMOS PERSISTIR ESOS DATOS PARA USARLOS EN OTROS COMPONENTES
  //NO ES NECESARIO, USAREMOS EL ESTADO INTERNO DEL COMPONENTE PARA GUARDAR LOS DATOS Y LOS TRANSFORMAREMOS EN UN MAPA
  //INMUTABLE
  //https://www.freecodecamp.org/news/handling-state-in-react-four-immutable-approaches-to-consider-d1f5c00249d5/

  _handleSubmit = async (todo, bag) => {
    this.props.todosActions.updateTodo(todo);
  };

  render() {
    let todo = this.props.navigation.getParam('todo');

    return (
      <Container>
        <Formik
          enableReinitialize
          //isInitialValidal={true}
          initialValues={todo.toJS()}
          onSubmit={this._handleSubmit}

          validationSchema={Yup.object().shape({
            name: Yup.string()
              .min(4,'El minimo de caracteres debe ser de 4')
              .required('El nombre es requerido'),
            status: Yup.string()
              .min(6,'El minimo de caracteres debe ser de 6')
              .required('El estado es requerido'),
          })}

          render={({
            values,
            handleSubmit,
            setFieldValue,
            errors,
            touched,
            setFieldTouched,
            //isValid,
            //isSubmitting,
          }) => (
            <Content>
              <Header>
                <Left>
                  <Button
                    transparent
                    onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                    <Icon name="ios-menu" />
                  </Button>
                </Left>
                <Body>
                  <Title>Altas</Title>
                </Body>
                <Right />
              </Header>
              <View style={styles.Content}>
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
             
                <Button full rounded
                  disabled={!Object.keys(errors).length === 0}
                  style={styles.button}
                  onPress={handleSubmit}>
                  <Text>Guardar  </Text>
                  <Icon name="md-send" size={25}/>
                </Button>
              </View>
            </Content>
          )}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Content: {
    marginTop: 20,
  },

  button:{
    marginTop: 25,
    backgroundColor: '#00FF00',
    marginLeft: 20,
    marginRight: 20
  },

});
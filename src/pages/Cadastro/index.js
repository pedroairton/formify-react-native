import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import {React, useState} from 'react'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'


export default function Cadastro({route}) {
  const navigation = useNavigation()
  
  const getDetails = (type) => {
    if (route.params) {
      switch (type) {
        //  case 'password':
        //    return route.params.password;
        case 'email':
          return route.params.email;

      }
    }
    return '';
  };
   const [password, setPassword] = useState(getDetails('password'));
  const [email, setEmail] = useState(getDetails('email'));

  const submitData = () => {
    fetch('http://localhost:3000/send-data', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //  password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
         Alert.alert(`${data.name} foi cadastrado com sucesso!`);
        navigation.navigate('Welcome');
        console.log('cadastrado', data)
        console.log(data.email)
        console.log(data.password)

      })
      .catch((err) => {
         Alert.alert('Algo deu errado ao cadastrar' + err);
        console.error('erro ao cadastrar', err)
        navigation.navigate('Welcome');
      });
  };
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Cadastrar aluno</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}> 
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder='Digite o Email à ser registrado' style={styles.input} onChangeText={(text) => setEmail(text)}/>
      

         {/* <Text style={styles.title}>Senha</Text>
        <TextInput placeholder='Digite sua senha' style={styles.input} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>  */}

        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={() => submitData()}>Cadastrar email</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#2F3C7E'
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  containerForm:{
    backgroundColor: 'white',
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title:{
    fontSize: 20,
    marginTop: 28,
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button:{
    backgroundColor:'#2F3C7E',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText:{
    color: '#a1a1a1'
  }
})
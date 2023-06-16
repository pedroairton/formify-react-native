import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import {React, useState} from 'react'

import axios from 'axios';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'


export default function SignInAdm() {
 


  const navigation = useNavigation()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const verificarAdm = () => {
    if(email==='adm' && password==='123'){
      navigation.navigate('AdmBridge')
    }else{
      console.log('Login administrativo incorreto!')
    }
}
  



  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}> 
        <Text style={styles.title}>Login administrativo</Text>
        <TextInput placeholder='Digite o Login de administrador' style={styles.input}
        value={email}
        onChangeText={setEmail}/>
      

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder='Digite a senha de administrador' style={styles.input} secureTextEntry={true}
        value={password}
        onChangeText={setPassword}/>

        <TouchableOpacity style={styles.button} onPress={() => verificarAdm()}>
          <Text style={styles.buttonText}>Acessar</Text>
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
  containerBottom:{
    backgroundColor: 'white'
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
    // fontWeight: 'bold'
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText:{
    color: '#a1a1a1'
  }
})
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => {
    return state;
  });

  console.log(data, loading);

  const fetchData = () => {
    fetch('http://192.168.0.193:3000/employees')
      .then((res) => res.json())
      .then((results) => {
        // setData(results)
        // setLoading(false)
        dispatch({ type: 'ADD_DATA', payload: results });
        dispatch({ type: 'SET_LOADING', payload: false });
        console.log('Conectado ao banco do formulário!')
      })
      .catch((err) => {
        Alert.alert('someting went wrong');
      });
  };
  const fetchData2 = () => {
    fetch('http://192.168.0.193:3000/logins')
      .then((res) => res.json())
      .then((results) => {
        // setData(results)
        // setLoading(false)
        dispatch({ type: 'ADD_DATA', payload: results });
        dispatch({ type: 'SET_LOADING', payload: false });
        console.log('Conectado ao banco de usuários!')
      })
      .catch((err) => {
        Alert.alert('someting went wrong');
      });
  };

   useEffect(() => {
     fetchData();
   }, []);

   useEffect(() => {
    fetchData2();
  }, []);




  const navigation = useNavigation()
  return (
    <View style={styles.container}>

<View style={styles.containerLogo}>
  <Animatable.Image
  animation="flipInY" 
  source={require('../../assets/ff.png')}
  style={{width: '35%', height: '35%' }}
  resizeMode='contain'
  />
  <Animatable.View animation="flipInX">
      <Text style={styles.textLogo}>FORMIFY</Text>
    </Animatable.View>
</View>

    <Animatable.View delay={700} animation="fadeInUp" style={styles.containerForm}>
      <Text style={styles.title}>Formulário de Avaliação</Text>
      <Text style={styles.text}></Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      <View style={styles.containerBottom}>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('SignInAdm')}>
          <Text style={styles.registerText}>Acesso administrativo</Text>
        </TouchableOpacity>
        </View>
    </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#2F3C7E',
  },
  containerBottom:{
    backgroundColor: 'white',
    paddingBottom: 15
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText:{
    color: '#a1a1a1',
    marginTop: 1
  },
  containerLogo:{
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerForm:{
    flex:1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',

  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    justifyContent: 'center',
    alignSelf: 'center'

  },
  text:{
    alignSelf: 'center',
    color: '#a1a1a1',
     marginBottom: 80, //REMOVER DEPOIS -----------------------------------------------------------------------------------------------------
  },
  textLogo:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  
  },
  button:{
    // position: 'absolute',
    backgroundColor: '#2F3C7E',
    borderRadius: 8,
    paddingVertical: 8,
    width: '90%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    fontSize: 16,
    color: 'white'
  }
})
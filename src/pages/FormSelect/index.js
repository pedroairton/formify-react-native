import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert,Image } from 'react-native'
import {React, useState} from 'react'

import axios from 'axios';
import * as Animatable from 'react-native-animatable'
import { useNavigation, useRoute } from '@react-navigation/native'


export default function FormSelect() {

const navigation = useNavigation()
const route = useRoute();
const email = route.params.email
  
  
  return (
    <View style={styles.container}>
       
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Bem-vindo(a):</Text>
          <Text style={styles.messageName}>{email}</Text>
        </Animatable.View>
     
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>FORMULÁRIOS DISPONÍVEIS:</Text>
              <View style={styles.containerDesc}>
                <TouchableOpacity onPress={() => navigation.navigate('Form')}>
                <Image
                source={require('../../assets/formIcon.png')}
                style={styles.foto}
                resizeMode="contain"
                />
                <Text style={styles.text}>FORMULÁRIO</Text>
                </TouchableOpacity>
            </View>
           
              
              
        </Animatable.View>
         <View style={styles.containerOut}>
            
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#2F3C7E',
  },
  containerForm:{
    flex:8,
    backgroundColor: 'white',
    // borderTopRightRadius: 25,
    // borderTopLeftRadius: 25,
    borderRadius: 25
  },
  containerHeader:{
    marginTop: '8%',
    marginBottom: '8%',
    paddingStart: '5%',
    backgroundColor: '#2f3c7e'
  },
   containerOut:{
     flex:3,
     backgroundColor: '#2f3c7e'
   },
  containerDesc:{
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'column',
    paddingStart: '5%',
    marginTop: '10%',
    alignItems: 'flex-start'

  },
  foto:{
    width: 128,
    height: 128,
  },
  message:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  messageName:{
    fontSize: 21,
    // fontWeight: 'bold',
    color: 'white',
  },
  title:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: '3%'
  },
  text:{
    fontWeight: 'bold',
    marginTop: 6
  },
  button:{
    // marginTop: 20,
    backgroundColor: '#2F3C7E',
    borderRadius: 8,
    paddingVertical: 8,
    width: '90%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20
  },
  buttonText:{
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
})


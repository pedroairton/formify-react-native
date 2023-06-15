import { View, Text, StyleSheet,Image,TouchableOpacity,ScrollView, TextInput, } from 'react-native'
import * as Progress from 'react-native-progress';
import React, {useState} from 'react'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'


export default function AdmBridge() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
        <View style={styles.containerOut}>
            
        </View>
        <Animatable.View animation="fadeInLeft" style={styles.containerForm}>
              
              <View style={styles.containerDesc}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
                      <Text style={styles.buttonText}>Cadastrar Email de aluno</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Results')}>
                      <Text style={styles.buttonText}>Ver os Resultados</Text>
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
    flex:6,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent:"center",

  },
  containerOut:{
    flex:4,
    backgroundColor: '#2f3c7e'
  },
  
  containerDesc:{
    backgroundColor: 'white',
    alignItems: 'center',
    flex:2,
    borderRadius: 25,
    justifyContent:"center"

  },
  containerBtn:{
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  
  title:{
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 18,

    alignSelf: 'center',
  },
  text:{
    color: '#a1a1a1'
  },
  button:{
    marginTop: 20,
    backgroundColor: '#2F3C7E',
    borderRadius: 8,
    paddingVertical: 8,
    width: '90%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  buttonText:{
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
})
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Tela Bem vindo</Text>

<View style={styles.containerLogo}>
  <Animatable.Image
  animation="flipInY" 
  source={require('../../assets/ff.png')}
  style={{width: '35%', height: '35%' }}
  resizeMode='contain'
  />
</View>

    <Animatable.View delay={700} animation="fadeInUp" style={styles.containerForm}>
      <Text style={styles.title}>Formulário de Avaliação</Text>
      <Text style={styles.text}>Faça o Login para começar.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#2F3C7E',
  },
  containerLogo:{
    flex:2,
    alignItems: 'center',
    justifyContent: 'center'
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
    color: '#a1a1a1'
  },
  button:{
    position: 'absolute',
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
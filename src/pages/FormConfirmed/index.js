import { View, Text, StyleSheet,Image,TouchableOpacity, } from 'react-native'
import React, {useState} from 'react'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'
// import { Slider } from 'react-native-elements';

export default function FormConfirmed() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.containerOut}>
            
        </View>
        <Animatable.View animation="fadeInLeft" style={styles.containerForm}>
              <View style={styles.containerLogo}>
                  <Image
                      source={require('../../assets/ff2.png')}
                      style={{ width: '75%', height: '75%', marginTop: 10 }}
                      resizeMode='contain'
                  />
              </View>
              <View style={styles.containerDesc}>
                <Text style={styles.title}>Agradecemos o seu Feedback!</Text>
              </View>
              <View style={styles.containerBtn}>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
                      <Text style={styles.buttonText}>Retornar ao início</Text>
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
    flex:5.5,
    backgroundColor: 'white',
    borderRadius: 25
  },
  containerOut:{
    flex:4,
    backgroundColor: '#2f3c7e'
  },
  containerLogo:{
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
    alignItems:'center',
    flex:3
  },
  containerDesc:{
    backgroundColor: 'white',
    alignItems: 'center',
    flex:2,
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
    marginBottom: 12,

    alignSelf: 'center',
  },
  text:{
    color: '#a1a1a1'
  },
  button:{
    marginTop: 20,
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingVertical: 8,
    width: '90%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  buttonText:{
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  },
})
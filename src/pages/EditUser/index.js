import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import {React, useState} from 'react'

import axios from 'axios';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'


const EditUser = (props) => {
 
    const { _id, password, email } = props.route.params.item


  const navigation = useNavigation()

  
  



  return (
    <View style={styles.container}>
      <TextInput
          label="E-mail"
          style={styles.inputStyle}
          value={email}
          theme={theme}
          onFocus={() => setenableShift(false)}
          mode="outlined"
          onChangeText={(text) => setEmail(text)}
        />
      {route.params ? (
          <Button
            style={styles.inputStyle}
            icon="content-save"
            mode="contained"
            theme={theme}
            onPress={() => updateDetails()}
          >
            Atualizar Detalhes
          </Button>
        ) : (
          <Button
            style={styles.inputStyle}
            icon="content-save"
            mode="contained"
            theme={theme}
            onPress={() => submitData()}
          >
            Salvar
          </Button>
        )}
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

export default EditUser
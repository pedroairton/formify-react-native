import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native'
import {React, useState} from 'react'
import { Card, FAB, Button } from 'react-native-paper';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';




export default function Cadastrar({route}) {
    const getDetails = (type) => {
    
        if (route.params) {
          switch (type) {
            case 'password':
              return route.params.password;
            case 'email':
              return route.params.email;
          }
        }
        return '';
      };
    
      const [password, setPassword] = useState(getDetails('password'));
      const [email, setEmail] = useState(getDetails('email'));
    
      const navigation = useNavigation()
      const data = useSelector((state) => {
        return state.data
      });
      const loading = useSelector((state) => {
        return state.loading;
      });
    
    
      const submitData = () => {
        fetch('http://192.168.0.193:3000/logins/send-data', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            password,
            email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
             Alert.alert(`${data.email} foi cadastrado com sucesso!`);
            navigation.navigate('Welcome',{ timestamp: Date.now() });
            console.log('Cadastrado:', data)
            console.log(data.email)
            console.log(data.password)
    
          })
          .catch((err) => {
             Alert.alert('Algo deu errado ao cadastrar' + err);
            console.error('erro ao cadastrar', err)
            navigation.navigate('Welcome',{ timestamp: Date.now() });
          });
          
      };
      const updateDetails = () => {
        fetch('http://192.168.0.193:3000/logins/update', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: route.params._id,
            password,
            email,
          }),
        })
          .then(res => res.json())
          .then(data => {
            Alert.alert(`${data.email} foi editado com sucesso!`);
            console.log(`${data.email} foi editado com sucesso!`);
            navigation.navigate('Welcome',{ timestamp: Date.now() });
          })
          .catch((err) => {
            console.err('algo deu errado,', err)
            Alert.alert('erro ao editar');
          });
          
      };
      
      const renderList = (item) => {
        return (
          <View style={styles.containerUsers}>
          <Card
            style={styles.mycard}
            onPress={() => navigation.navigate('Profiles', { item })}
          >
            <View style={styles.cardView}>
              
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.text}>EMAIL: {item.email}</Text>
                {/* <Text style={styles.text}>Senha:{item.password}</Text> */}
              </View>
            </View>
          </Card>
          </View>
        );
      };
      return (
        <View style={styles.container}>
            {route.params ? (
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
              <Text style={styles.message}>Atualizar o aluno</Text>
            </Animatable.View>
            ) : (
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastrar aluno</Text>
            </Animatable.View>
            )}
          
    
          <Animatable.View animation="fadeInUp" style={styles.containerForm}> 
            <Text style={styles.title}>Email</Text>
            <TextInput placeholder='Digite o Email a ser registrado' value={email} style={styles.input} onChangeText={(text) => setEmail(text)}/>
          
    
            <Text style={styles.title}>Senha</Text>
            <TextInput placeholder='Digite sua senha' value={password} style={styles.input} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
            {route.params ? (
              <Button
                style={styles.button}
                mode="contained"
                theme={'blue'}
                onPress={() => updateDetails()}
              >
                Atualizar os Detalhes
              </Button>
            ) : (
              <Button
                style={styles.button}
                mode="contained"
                theme={'blue'}
                onPress={() => submitData()}
              >
                Cadastrar email
              </Button>
            )}
            
          </Animatable.View>
          
        </View>
      )
    }
    
    const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor: '#2F3C7E'
      },
      containerLowTitle:{
        marginTop:'3%', 
        justifyContent:'center',
        backgroundColor:'white',
      },
      textUsuarios:{
        fontWeight:'bold',
        fontSize:23,
      },
      containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
      },
      containerUsers:{
      marginTop: '2%',
      backgroundColor:'white',
      },
      mycard:{
        marginTop: '3%',
        backgroundColor:'#2f3c7e',
        paddingVertical: 10
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
      },
      text:{
        color:'white'
      }
})
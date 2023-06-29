import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform, Alert } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper'
import { MaterialIcons, Entypo } from '@expo/vector-icons'
import { color } from 'react-native-elements/dist/helpers';
import * as Animatable from 'react-native-animatable'

const Profiles = (props) => {

    const { _id, password, email } = props.route.params.item
    const deleteEmploye = () => {
        fetch("http://192.168.0.193:3000/logins/delete", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: _id
            })
        })
            .then(res => res.json())
            .then(deletedEmp => {
                console.log(`Usuário ${deletedEmp.email} deletado!`)
                Alert.alert(`Usuário ${deletedEmp.email} deletado!`)
                props.navigation.navigate("Welcome")
            })
            .catch(err => {
                console.err("alguma coisa deu errado",err)
            })
    }
    // const openDial = () => {
    //     if (Platform.OS === "android") {
    //         Linking.openURL(`tel:${phone}`)
    //     } else {
    //         Linking.openURL(`telprompt:${phone}`)
    //     }
    // }
    return (
        <View style={styles.container}>

           <View style={styles.containerOut}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Perfil do Usuário:</Text>
            </Animatable.View>
           </View>

           <Animatable.View animation="fadeInLeft" style={styles.containerItem}>
           <View>
                    <Text style={styles.textInfo}>Email:</Text>
                </View>
           <Card style={styles.mycard} onPress={() => {
                Linking.openURL(`mailto:${email}`)
            }}>
                
                <View style={styles.cardContent}>
                    <Text style={styles.mytext}>{email}</Text>
                </View>
            </Card>
            <View>
                    <Text style={styles.textInfo}>Senha:</Text>
                </View>
            <Card style={styles.mycard}>
            
                <View style={styles.cardContent}>
                    
                    <Text style={styles.mytext}>{password}</Text>
                </View>
            </Card>
            <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
                <Button
                    mode="contained"
                    theme={theme}
                    style={styles.button}
                    onPress={() => {
                        props.navigation.navigate("Cadastrar",
                            { _id, email, password }
                        )
                    }}>Editar
                </Button>
                <Button                   
                    mode="contained"
                    theme={theme}
                    style={styles.button}
                    onPress={() => deleteEmploye()}>Deletar
            </Button>
            </View>
           </Animatable.View>
           <View style={styles.containerOut}></View>
        </View>
    )
}

const theme = {
    colors: {
        primary: "#2f3c7e"
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2f3c7e'
    },
    button:{
        backgroundColor:'#2F3C7E',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 18,
        marginTop: 14,
      },
    containerItem: {
        flex: 2,
        backgroundColor: 'white',
        borderRadius: 25,
        paddingStart: '3%',
        paddingEnd: '3%'
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
    containerOut: {
        flex: 1,
        backgroundColor: '#2f3c7e'
    },
    mycard: {
        margin: 3,
        backgroundColor:'#2f3c7e'
    },
    cardContent: {
        flexDirection: "row",
        padding: 8
    },
    mytext: {
        fontSize: 18,
        marginTop: 3,
        marginLeft: 5,
        color:'white'
    },
    textInfo: {
        fontSize: 18,
        fontWeight:'bold',
        marginTop: 3,
        marginLeft: 5,
        color:'black',
        marginTop: '5%'
    }
})
export default Profiles
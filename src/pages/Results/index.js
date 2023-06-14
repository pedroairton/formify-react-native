import { View, Text, StyleSheet,Image,TouchableOpacity,ScrollView, TextInput, } from 'react-native'
import * as Progress from 'react-native-progress';
import React, {useState} from 'react'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

// import * as formProv from './../Form/index.js'

export default function Results() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    }
    const [expanded2, setExpanded2] = useState(false);

    const toggleExpand2 = () => {
        setExpanded2(!expanded2);
    }
    return (
        <View style={styles.container}>
            <ScrollView>
            <Animatable.View animation="fadeInLeft" style={styles.containerTop}>
                <Text style={styles.titlePage}>RESULTADOS</Text>
            </Animatable.View>
            <View style={styles.containerOut}>

            </View>
            <View style={styles.containerForm}>
                <TouchableOpacity style={styles.expand} onPress={toggleExpand}>
                    <View style={styles.containerExp}>
                        <View style={styles.display}>
                            <Image
                                source={require('../../assets/iconProf.jpg')}
                                style={styles.foto}
                                resizeMode="contain"
                            />
                            <Text style={styles.title}>
                               PROFESSOR 1
                            </Text>

                        </View>

                        {expanded && (
                            <View style={styles.details}>
                                <Text style={styles.detailsText}>Geral:</Text>
                                <Progress.Bar progress={0.6} width={200} height={20} marginBottom={15} />
                                <Text style={styles.detailsTextMini}>Prazos:</Text>
                                <Progress.Bar progress={0.6} width={200} marginBottom={15} />
                                <Text style={styles.detailsTextMini}>Didática:</Text>
                                <Progress.Bar progress={0.6} width={200} marginBottom={15} />
                                <Text style={styles.detailsTextMini}>Leal ao Plano de Ensino:</Text>
                                <Progress.Bar progress={0.6} width={200} marginBottom={15} />
                                <Text style={styles.detailsTextMini}>Prestatividade:</Text>
                                <Progress.Bar progress={0.6} width={200} marginBottom={15} />

                                {/* <Text>{formProv.valorCmt}</Text> */}
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.expand} onPress={toggleExpand2}>
                    <View style={styles.containerExp}>
                        <View style={styles.display}>
                            <Image
                                source={require('../../assets/iconProf.jpg')}
                                style={styles.foto}
                                resizeMode="contain"
                            />
                            <Text style={styles.title}>
                               PROFESSOR 2
                            </Text>

                        </View>

                        {expanded2 && (
                            <View style={styles.details}>
                                <Text style={styles.detailsText}>Geral:</Text>
                                <Progress.Bar progress={0.6} width={200} height={20} marginBottom={15} />
                                <Text style={styles.detailsTextMini}>Prazos:</Text>
                                <Progress.Bar progress={0.6} width={200} marginBottom={15} />
                                <Text style={styles.detailsTextMini}>Didática:</Text>
                                <Progress.Bar progress={0.6} width={200} marginBottom={15} />
                                <Text style={styles.detailsTextMini}>Leal ao Plano de Ensino:</Text>
                                <Progress.Bar progress={0.6} width={200} marginBottom={15} />
                                <Text style={styles.detailsTextMini}>Prestatividade:</Text>
                                <Progress.Bar progress={0.6} width={200} marginBottom={15} />
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
                <View>
                    {/* <Text>teste</Text>
                    <Progress.Bar progress={0.6} width={200} /> */}
                </View>
            </View>

            <View style={styles.containerOut}>

            </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2f3c7e'
    },
    foto:{
        width: 100,
        height: 100, // Ajuste as dimensões conforme necessário
        margin: 5,
    },
    containerExp: {
        borderRadius: 25,
        backgroundColor: 'white',
        paddingBottom: 50,
    },
    containerOut:{
        flex:1,
        backgroundColor: '#2f3c7e'
      },
    containerForm:{
        flex:8,
        backgroundColor: 'white',
        borderRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        
      },
      containerTop:{
        flex:1,
        backgroundColor: '#2F3C7E',
        paddingStart: '5%',
        paddingEnd: '5%',
      },
    display:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0'
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    details: {
        marginTop: 10,
        borderRadius: 25
    },
    expand: {
        marginTop: 10,
        borderRadius: 25,
        },
    detailsText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#333333',
    },
    detailsTextMini: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
    },
    titlePage:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white'
    
      },
});

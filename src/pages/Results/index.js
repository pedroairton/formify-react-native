import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import * as Progress from 'react-native-progress';
import React, { useEffect, useState } from 'react';

import * as Animatable from 'react-native-animatable'

import axios from 'axios';
import { useNavigation } from '@react-navigation/native'

export default function Results() {
  const [progresses1to5, setProgresses1to5] = useState([]);
  const [progresses6to10, setProgresses6to10] = useState([]);

  const texts1to5 = ['Prazos:', 'Didática:', 'Leal ao Plano de ensino:', 'Prestatividade:', 'Domínio do assunto:'];
  const texts6to10 = ['Prazos:', 'Didática:', 'Leal ao Plano de ensino:', 'Prestatividade:', 'Domínio do assunto:'];

  const texts1to5WithProgress = texts1to5.map((text, index) => `${text} ${(progresses1to5[index]*10).toFixed(1)}`);
  const texts6to10WithProgress = texts6to10.map((text, index) => `${text} ${(progresses6to10[index]*10).toFixed(1)}`);
  useEffect(() => {
    const variables = ['value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7', 'value8', 'value9', 'value10'];

    axios.get('http://localhost:3000/employees')
      .then((response) => {
        const { data } = response;

        if (data.length === 0) {
          console.log('Não há dados suficientes para calcular as médias.');
          return;
        }

        const newProgresses1to5 = variables.slice(0, 5).map((variable) => {
          let sum = 0;
          data.forEach((employee) => {
            sum += employee[variable];
          });

          const average = sum / data.length;
          return average / 10;
          

        });

        const newProgresses6to10 = variables.slice(5).map((variable) => {
          let sum = 0;
          data.forEach((employee) => {
            sum += employee[variable];
          });

          const average = sum / data.length;
          return average / 10;
        });

        setProgresses1to5(newProgresses1to5);
        setProgresses6to10(newProgresses6to10);
      })
      .catch((error) => {
        console.log('Erro ao recuperar os dados:', error);
      });
  }, []);

  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const [expanded2, setExpanded2] = useState(false);
  const toggleExpand2 = () => {
    setExpanded2(!expanded2);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Animatable.View animation="fadeInLeft" style={styles.containerTop}>
          <Text style={styles.titlePage}>RESULTADOS</Text>
        </Animatable.View>
        {/* <View style={styles.containerOut} /> */}

        <View style={styles.containerForm}>
          <TouchableOpacity style={styles.expand} onPress={toggleExpand}>
            <View style={styles.containerExp}>
              <View style={styles.display}>
                <Image
                  source={require('../../assets/iconProf.jpg')}
                  style={styles.foto}
                  resizeMode="contain"
                />
                <Text style={styles.title}>PROFESSOR 1</Text>
              </View>

              {expanded && (
                <View style={styles.details}>
                  <Text style={styles.detailsText}>Médias</Text>
                  {progresses1to5.map((progress, index) => (
                    <View key={index} style={styles.progressContainer}>
                      <Text
                        style={[styles.progressText, index === 0 ? styles.boldText : null]}
                      >
                        {texts1to5WithProgress[index]}
                      </Text>
                      <Progress.Bar progress={progress} width={200} height={20} marginBottom={15} />
                    </View>
                  ))}
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
                <Text style={styles.title}>PROFESSOR 2</Text>
              </View>

              {expanded2 && (
                <View style={styles.details}>
                  <Text style={styles.detailsText}>Médias</Text>
                  {progresses6to10.map((progress, index) => (
                    <View key={index} style={styles.progressContainer}>
                      <Text
                        style={[styles.progressText, index + 5 === 5 ? styles.boldText : null]}
                      >
                        {texts6to10WithProgress[index]}
                      </Text>
                      <Progress.Bar progress={progress} width={200} height={20} marginBottom={15} />
                    </View>
                  ))}
                </View>
              )}
            </View>
          </TouchableOpacity>
          <View>
            {/* <Text>teste</Text>
                    <Progress.Bar progress={0.6} width={200} /> */}
          </View>
        </View>

        {/* <View style={styles.containerOut} /> */}
      </ScrollView>
    </View>
  );
}


// const texts1to5 = ['Prazos', 'Didática', 'Leal ao Plano de ensino', 'Prestatividade', 'Domínio do assunto'];
// const texts6to10 = ['Prazos', 'Didática', 'Leal ao Plano de ensino', 'Prestatividade', 'Domínio do assunto'];

// const texts1to5WithProgress = texts1to5.map((text, index) => `${text} ${progresses1to5[index]}`);
// const texts6to10WithProgress = texts6to10.map((text, index) => `${text} ${progresses6to10[index]}`);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f3c7e'
  },
  foto: {
    width: 100,
    height: 100,
    margin: 5,
  },
  progressText: {
    marginVertical: 5,
    fontSize: 16
  },
//   boldText: {
//     fontWeight: 'bold',
//     fontSize: 16
//   },
  containerExp: {
    borderRadius: 25,
    backgroundColor: 'white',
    paddingBottom: 50,
  },
  containerOut: {
    flex: 1,
    backgroundColor: '#2f3c7e'
  },
  containerForm: {
    flex: 9,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  containerTop: {
    flex: 1,
    backgroundColor: '#2F3C7E',
    paddingStart: '5%',
    paddingEnd: '5%',
    marginBottom: 30
  },
  display: {
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
  titlePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white'

  },
});

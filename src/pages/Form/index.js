import { View, Text, StyleSheet,Image,TouchableOpacity,ScrollView, TextInput } from 'react-native'
import React, {useState} from 'react'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'
import { Slider } from 'react-native-elements';

export default function Form() {
  const navigation = useNavigation()

  const [value1, setValue1] = useState(5);
  const [value2, setValue2] = useState(5);
  const [value3, setValue3] = useState(5);
  const [value4, setValue4] = useState(5);
  const [value5, setValue5] = useState(5);

  const handleSliderChange1 = (newValue) => {
    setValue1(newValue);
  };
  const handleSliderChange2 = (newValue) => {
    setValue2(newValue);
  };
  const handleSliderChange3 = (newValue) => {
    setValue3(newValue);
  };
  const handleSliderChange4 = (newValue) => {
    setValue4(newValue);
  };
  const handleSliderChange5 = (newValue) => {
    setValue5(newValue);
  };

  const [value6, setValue6] = useState(5);
  const [value7, setValue7] = useState(5);
  const [value8, setValue8] = useState(5);
  const [value9, setValue9] = useState(5);
  const [value10, setValue10] = useState(5);

  const handleSliderChange6 = (newValue) => {
    setValue6(newValue);
  };
  const handleSliderChange7 = (newValue) => {
    setValue7(newValue);
  };
  const handleSliderChange8 = (newValue) => {
    setValue8(newValue);
  };
  const handleSliderChange9 = (newValue) => {
    setValue9(newValue);
  };
  const handleSliderChange10 = (newValue) => {
    setValue10(newValue);
  };

  const [valorCmt, setValorCmt] = useState('');

  const handleSubmit = () => {
    console.log('Valor do TextInput:', valorCmt);
  };
  const handleChangeTexto = (texto) => {
    setValorInput(texto);
  };

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
      <Text style={styles.titlePage}>FORMULÁRIO</Text>
    </Animatable.View>
        <Animatable.View animation="fadeInUp" delay={200} style={styles.containerForm}>


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
                    </View>
                </TouchableOpacity>

              
              <View style={styles.containerPgt}>
                    <Text style={styles.textPgt}>O Professor cumpre os horários ?</Text>
                  </View>
                  <View style={styles.containerSlider}>
                  <Slider
                      value={value1}
                      onValueChange={handleSliderChange1}
                      minimumValue={0}
                      maximumValue={10}
                      step={1}
                      thumbStyle={styles.sliderThumb}
                      allowTouchTrack={true}
                  />
                  </View>
                  <View style={styles.containerPgt}>
                    <Text style={styles.textPgt}>O Professor segue o material de estudo ?</Text>
                  </View>
                  <View style={styles.containerSlider}>
                  <Slider
                      value={value2}
                      onValueChange={handleSliderChange2}
                      minimumValue={0}
                      maximumValue={10}
                      step={1}
                      thumbStyle={styles.sliderThumb}
                      allowTouchTrack={true}

                  />
                  </View>
                  <View style={styles.containerPgt}>
                    <Text style={styles.textPgt}>O Professor apresenta conteúdos de maneira clara e objetiva?</Text>
                  </View>
                  <View style={styles.containerSlider}>
                  <Slider
                      value={value3}
                      onValueChange={handleSliderChange3}
                      minimumValue={0}
                      maximumValue={10}
                      step={1}
                      thumbStyle={styles.sliderThumb}
                      allowTouchTrack={true}
                  />
                  </View>
                  <View style={styles.containerPgt}>
                    <Text style={styles.textPgt}>O Professor tem domínio sobre o conteúdo abordado nas aulas?</Text>
                  </View>
                  <View style={styles.containerSlider}>
                  <Slider
                      value={value4}
                      onValueChange={handleSliderChange4}
                      minimumValue={0}
                      maximumValue={10}
                      step={1}
                      thumbStyle={styles.sliderThumb}
                      allowTouchTrack={true}
                  />
                  </View>
                  <View style={styles.containerPgt}>
                    <Text style={styles.textPgt}>O Professor se dispõe a ajudar alunos com dificuldades ?</Text>
                  </View >
                  <View style={styles.containerSlider}>
                  <Slider
                      value={value5}
                      onValueChange={handleSliderChange5}
                      minimumValue={0}
                      maximumValue={10}
                      step={1}
                      thumbStyle={styles.sliderThumb}
                      allowTouchTrack={true}
                  />
                  </View>
                  <View style={styles.containerCmt}>
                  <Text style={styles.titleCmt}>Comentários adicionais(opcional):</Text>
                    <TextInput placeholder='Digite um comentário' style={styles.input} 
                    value={valorCmt}
                    onChangeText={handleChangeTexto}/>
                  </View >
        
          </Animatable.View>
          <Animatable.View animation="fadeInUp" delay={200} style={styles.containerForm}>
              <View style={styles.containerProf}>
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

      
                    </View>
                </TouchableOpacity>
              </View>
              <View style={styles.containerPgt}>
                    <Text style={styles.textPgt}>O Professor cumpre os horários ?</Text>
                  </View>
                  <View style={styles.containerSlider}>
                  <Slider
                      value={value6}
                      onValueChange={handleSliderChange6}
                      minimumValue={0}
                      maximumValue={10}
                      step={1}
                      thumbStyle={styles.sliderThumb}
                      allowTouchTrack={true}
                  />
                  </View>
                  <View style={styles.containerPgt}>
                    <Text style={styles.textPgt}>O Professor segue o material de estudo ?</Text>
                  </View>
                  <View style={styles.containerSlider}>
                  <Slider
                      value={value7}
                      onValueChange={handleSliderChange7}
                      minimumValue={0}
                      maximumValue={10}
                      step={1}
                      thumbStyle={styles.sliderThumb}
                      allowTouchTrack={true}
                  />
                  </View>
                  <View style={styles.containerPgt}>
                    <Text style={styles.textPgt}>O Professor apresenta conteúdos de maneira clara e objetiva?</Text>
                  </View>
                  <View style={styles.containerSlider}>
                  <Slider
                      value={value8}
                      onValueChange={handleSliderChange8}
                      minimumValue={0}
                      maximumValue={10}
                      step={1}
                      thumbStyle={styles.sliderThumb}
                      allowTouchTrack={true}
                  />
                  </View>
                  <View style={styles.containerPgt}>
                    <Text style={styles.textPgt}>O Professor tem domínio sobre o conteúdo abordado nas aulas?</Text>
                  </View>
                  <View style={styles.containerSlider}>
                  <Slider
                      value={value9}
                      onValueChange={handleSliderChange9}
                      minimumValue={0}
                      maximumValue={10}
                      step={1}
                      thumbStyle={styles.sliderThumb}
                      allowTouchTrack={true}
                  />
                  </View>
                  <View style={styles.containerPgt}>
                    <Text style={styles.textPgt}>O Professor se dispõe a ajudar alunos com dificuldades ?</Text>
                  </View >
                  <View style={styles.containerSlider}>
                  <Slider
                      value={value10}
                      onValueChange={handleSliderChange10}
                      minimumValue={0}
                      maximumValue={10}
                      step={1}
                      thumbStyle={styles.sliderThumb}
                      allowTouchTrack={true}
                  />
                  </View>
                  <View style={styles.containerCmt}>
                  <Text style={styles.titleCmt}>Comentários adicionais(opcional):</Text>
                    <TextInput placeholder='Digite um comentário' style={styles.input}/>
                  </View >
          </Animatable.View>
              <View>
                  <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('FormConfirmed')} >
                      <Text style={styles.buttonText}>Enviar</Text>
                  </TouchableOpacity>
              </View>
          </ScrollView>
      </View>
      
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#2F3C7E',

  },
  foto:{
    width: 100,
    height: 100, // Ajuste as dimensões conforme necessário
    margin: 5,
},
  sliderThumb:{
    height:30,
    width:30,
    backgroundColor:'black'
  },
  containerForm:{
    flex:4,
    backgroundColor: 'white',
    marginBottom: 70

  },
  containerPgt:{
    flex:2,
    backgroundColor: 'white',
    paddingStart: '5%',
    paddingEnd: '5%',
    backgroundColor: '#f0f0f0',
    marginBottom: 20
  },
  containerCmt:{
    flex:2,
    backgroundColor: 'white',
    paddingStart: '5%',
    paddingEnd: '5%',
    backgroundColor: '#f0f0f0'
  },
  containerSlider:{
    flex:2,
    backgroundColor: 'white',
    paddingStart: '5%',
    paddingEnd: '20%',
  },
  textPgt:{
    fontSize: 17,
  },
  containerProf:{
    flex:1,
    backgroundColor: '#f0f0f0',
    // alignItems: 'flex',
    flexDirection: 'row',
    paddingStart: '3%',
    paddingEnd: '3%',
    marginBottom: 10,
    paddingTop: 10,
    marginTop:10,

  },

  containerTop:{
    flex:1,
    backgroundColor: '#2F3C7E',
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  containerExp: {
    borderRadius: 25,
    backgroundColor: 'white',
    paddingBottom: 50,
},
expand: {
  marginTop: 10,
  borderRadius: 25,
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
  titleCmt:{
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
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
  },
  buttonText:{
    fontSize: 16,
    color: 'black'
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  }
})
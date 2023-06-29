import { View, Text, StyleSheet,Image,TouchableOpacity,ScrollView, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'
import { Slider } from 'react-native-elements';

export default function Form({route}) {
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
  const [valorCmt2, setValorCmt2] = useState('');


  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
      setExpanded(!expanded);
  }
  const [expanded2, setExpanded2] = useState(false);

  const toggleExpand2 = () => {
      setExpanded2(!expanded2);
  }

  // const getDetails = (type) => {
  //   if (route.params) {
  //     switch (type) {
  //       // case 'email':
  //       //   return route.params.email;
  //       case 'value1':
  //         return route.params.value1;
  //       case 'value2':
  //         return route.params.value2;
  //       case 'value3':
  //         return route.params.value3;
  //       case 'value4':
  //         return route.params.value4;
  //       case 'value5':
  //         return route.params.value5;
  

  //     }
  //   }
  //   return '';
  // };

  const submitData = async () => {
    fetch('http://192.168.0.193:3000/form/send-data', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        value9,
        value10,
        // valorCmt,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
         Alert.alert(`Formulário enviado com sucesso!`);
        navigation.navigate('Welcome');
        console.log('Dados do formulário enviados com sucesso!:', data)
        // console.log(data.email)
        // console.log(data.password)
        navigation.navigate('FormConfirmed')

      })
      .catch((err) => {
         Alert.alert('Algo deu errado ao enviar o formulário.');
        console.error('Erro ao enviar formulário:', err)
        navigation.navigate('Welcome');
      });
  };
  return (
    <View style={styles.container}>
        <ScrollView>
      <Animatable.View animation="fadeInLeft" style={styles.containerTop}>
      <Text style={styles.titlePage}>FORMULÁRIO</Text>
    </Animatable.View>
        <Animatable.View animation="fadeInUp" delay={200} style={styles.containerForm}>


        <TouchableOpacity style={styles.expand} onPress={toggleExpand}>
                        <View style={styles.display}>
                            <Image
                                source={require('../../assets/iconP1.png')}
                                style={styles.foto}
                                resizeMode="contain"
                            />
                            <Text style={styles.title}>
                               PROFESSOR SILVA
                            </Text>

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
            
                  {/* <View style={styles.containerPgt}>
                  <Text style={styles.titleCmt}>Comentários adicionais(opcional):</Text>
                  </View >
                  <View style={styles.containerCmt}>
                  <TextInput placeholder='Digite um comentário' style={styles.input} 
                    value={valorCmt}
                    onChangeText={setValorCmt}/>
                  </View> */}
                    
        
          </Animatable.View>
          <Animatable.View animation="fadeInLeft" style={styles.containerForm}>
              <Animatable.View animation="fadeInLeft" style={styles.containerProf}>
                
              <TouchableOpacity style={styles.expand2} onPress={toggleExpand2}>            
                        <View style={styles.display}>
                            <Image
                                source={require('../../assets/iconP2.png')}
                                style={styles.foto}
                                resizeMode="contain"
                            />
                            <Text style={styles.title}>
                               PROFESSOR GUEDES
                            </Text>
                    </View>
                </TouchableOpacity>

            </Animatable.View>
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
                  <Slider style={styles.slider}
                      value={value10}
                      onValueChange={handleSliderChange10}
                      minimumValue={0}
                      maximumValue={10}
                      step={1}
                      thumbStyle={styles.sliderThumb}
                      allowTouchTrack={true}
                  />
                  </View>
                  {/* <View style={styles.containerPgt}>
                    <Text style={styles.titleCmt}>Comentários adicionais(opcional):</Text>
                  </View >
                  <View style={styles.containerCmt}>
                  <TextInput placeholder='Digite um comentário' style={styles.input} 
                    value={valorCmt2}
                    onChangeText={setValorCmt2}/>
                  </View> */}
          </Animatable.View>
              <View>
                  <TouchableOpacity style={styles.button} onPress={ () => submitData()} >
                      <Text style={styles.buttonText}>Enviar</Text>
                  </TouchableOpacity>
              </View>
          </ScrollView>
      </View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3C7E',
    padding: 10,
  },
  slider:{
    flex:1
  },
  sliderTxt:{
      fontSize:15,
  },
  sliderThumb:{
    height:30,
    width:30,
    backgroundColor:'black'
  },
  containerTop: {
    flex: 1,
    backgroundColor: '#2F3C7E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  foto:{
    width: 100,
    height: 100, 
    margin: 5,
  },
  titlePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: 'white',
  },
  containerForm: {
    flex: 8,
    backgroundColor: 'white',
    marginVertical: '5%',
    padding: 10,
    borderRadius: 8,
  },
  containerPgt: {
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
  },
  textPgt: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  containerSlider: {
    padding: 10,
  },
  containerProf: {
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  expand: {
    borderRadius: 25,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 8,
  },
  containerExp: {
    paddingBottom: 50,
  },
  display: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingVertical: 8,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
});
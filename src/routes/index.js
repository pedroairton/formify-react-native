import { createNativeStackNavigator, StackNavigationOptions } from '@react-navigation/native-stack'
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import SignInAdm from '../pages/SignInAdm'
import Form from '../pages/Form'
import Results from '../pages/Results'
import FormConfirmed from '../pages/FormConfirmed'
import Cadastro from '../pages/Cadastro'
import Cadastrar from '../pages/Cadastrar'
import AdmBridge from '../pages/AdmBridge'
import Profiles from '../pages/Profiles'
import FormSelect from '../pages/FormSelect'


const Stack = createNativeStackNavigator()


export default function Routes(){
    const navigation = useNavigation()

    const handleHeaderPress = () => {
        navigation.navigate('Welcome'); 
      }
    return(
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor: '#2f3c7e'
            },
            headerTintColor: 'white',
            headerShadowVisible: false,
            headerTitle: () => {
                return (
                <TouchableOpacity onPress={handleHeaderPress}>
                    <Text style={{ 
                        fontSize: 19,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontWeight:'bold',
                        letterSpacing: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: 'white',
                        color: 'white'
                        }}>FORMIFY</Text>
                </TouchableOpacity>
                )
            },
            headerTitleAlign:'center',
        }}>
           <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
           /> 

           <Stack.Screen
            name="SignIn"
            component={SignIn}
           /> 

            <Stack.Screen
            name="SignInAdm"
            component={SignInAdm}
           /> 

            <Stack.Screen
            name="Form"
            component={Form}
           />
           <Stack.Screen
            name="FormConfirmed"
            component={FormConfirmed}
           />
           <Stack.Screen
            name="Results"
            component={Results}
           />
           <Stack.Screen
            name="Cadastro"
            component={Cadastro}
           />
           <Stack.Screen
            name="AdmBridge"
            component={AdmBridge}
           />
           <Stack.Screen
            name="Profiles"
            component={Profiles}
           />
           <Stack.Screen
            name="FormSelect"
            component={FormSelect}
           />
           <Stack.Screen
            name="Cadastrar"
            component={Cadastrar}
           />
           
        </Stack.Navigator>
    )
}
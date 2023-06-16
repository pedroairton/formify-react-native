import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import SignInAdm from '../pages/SignInAdm'
import Form from '../pages/Form'
import Results from '../pages/Results'
import FormConfirmed from '../pages/FormConfirmed'
import Cadastro from '../pages/Cadastro'
import AdmBridge from '../pages/AdmBridge'
import Profiles from '../pages/Profiles'
import EditUser from '../pages/EditUser'


const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
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
            name="EditUser"
            component={EditUser}
           />
           
        </Stack.Navigator>
    )
}
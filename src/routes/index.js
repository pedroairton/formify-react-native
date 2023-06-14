import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Form from '../pages/Form'
import Results from '../pages/Results'
import FormConfirmed from '../pages/FormConfirmed'

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
        </Stack.Navigator>
    )
}
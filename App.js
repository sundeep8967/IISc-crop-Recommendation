
import Home from './Home';

import { NavigationContainer } from '@react-navigation/native';

import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Secondpage from './Secondpage'


const Stack = createNativeStackNavigator()

export default function App() {

 

  return (
    <NavigationContainer>
          <Stack.Navigator  initialRouteName='Home'>
            <Stack.Screen name="Home"  options={{ title: 'Select Crop' }} component={Home} />
            <Stack.Screen name="Data" options={{ title: 'Crop Info' }} component={Secondpage} />
          </Stack.Navigator>
    </NavigationContainer>

  


  );
}


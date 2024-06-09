import { View, Text , Image , Button, Modal} from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import MovieApp from './screen/MovieApp';
import MovieDetail from './screen/MovieDetail';

const Stack = createNativeStackNavigator();




const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="MovieApp" component={MovieApp} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  </NavigationContainer>

  )
}

export default App



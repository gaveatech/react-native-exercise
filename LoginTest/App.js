import React, {useState} from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginContext} from './src/context';

import {getData} from './src/utils';

import Home from './src/screen/Home';
import Logged from './src/screen/Logged';
import Register from './src/screen/Register';

const Stack = createStackNavigator();

const App: () => Node = () => {
  const [email, setEmail] = useState();
  const [teste, setTeste] = useState();

  const logged = getData('logged').then(value => {
    setTeste(value);
  });

  return (
    <NavigationContainer>
      <LoginContext.Provider
        value={{
          email,
          setEmail,
        }}>
        <Stack.Navigator
          initialRouteName={teste === '1' ? 'Logged' : 'Home'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Logged" component={Logged} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </LoginContext.Provider>
    </NavigationContainer>
  );
};

export default App;

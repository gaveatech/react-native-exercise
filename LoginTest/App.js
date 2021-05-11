import React, {useState} from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginContext} from './src/context';

import Home from './src/screen/Home';
import Logged from './src/screen/Logged';

const Stack = createStackNavigator();

const App: () => Node = () => {
  const [email, setEmail] = useState();
  // const togglePlayPause = () => setEmail(email);

  return (
    <NavigationContainer>
      <LoginContext.Provider
        value={{
          email,
          setEmail,
        }}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Logged" component={Logged} />
        </Stack.Navigator>
      </LoginContext.Provider>
    </NavigationContainer>
  );
};

export default App;

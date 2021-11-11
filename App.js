import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './screens/signup';
import Login from './screens/login';
import Home from './screens/home';
import Users from './screens/users';
import Comments from './screens/allComments';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            // backgroundColor: '#fa0f2a',
          },
          headerTitleStyle: {
            fontSize: 25,
            textAlign: 'center',
          },
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: 'Signup' }} 
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Users"
          component={Users}
          options={{ title: 'Users', headerShown: true, headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Comments"
          component={Comments}
          options={{ title: 'Comments', headerShown: true, headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    padding: 50,
    textAlign: 'center',
  },
});

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen} from '../util/constants/ScreenConstants';
import SplashScreen from '../screen/intro/SplashScreen';

const AuthNavStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthNavStack.Navigator
      screenOptions={{headerShown: false, orientation: 'portrait'}}>
      <AuthNavStack.Screen name={Screen.auth.splash} component={SplashScreen} />
    </AuthNavStack.Navigator>
  );
};

export default AuthNavigation;

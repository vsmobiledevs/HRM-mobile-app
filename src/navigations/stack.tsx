import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/loginScreen';
import BottomTab from './bottomTab';
import SplashScreen from '../screens/auth/splashScreen';
import SignupScreen from '../screens/auth/signupScreen';
import ForgotScreen from '../screens/auth/forgotScreen';
import OtpScreen from '../screens/auth/otpScreen';
import ChangePassword from '../screens/auth/changPassword';
import Leaves from '../screens/services/leaves';
import NewLeave from '../screens/services/newLeave';
import Accessories from '../screens/services/accessories';
import NewAccessory from '../screens/services/newAccessory';

const RootStack = createNativeStackNavigator();

const MainStack = () => {
  const BeforeAuthStack = () => {
    return (
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            gestureEnabled: true,
            headerMode: 'none',
            headerShown: false,
            animation: 'slide_from_right',
          }}>
          <RootStack.Screen name={'splash'} component={SplashScreen} />
          <RootStack.Screen name={'login'} component={LoginScreen} />
          <RootStack.Screen name={'signup'} component={SignupScreen} />
          <RootStack.Screen name={'forgot'} component={ForgotScreen} />
          <RootStack.Screen name={'otp'} component={OtpScreen} />
          <RootStack.Screen
            name={'changePassword'}
            component={ChangePassword}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };

  const AfterAuthStack = () => {
    return (
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            gestureEnabled: true,
            headerMode: 'none',
            headerShown: false,
            animation: 'slide_from_right',
          }}>
          <RootStack.Screen name={'bottomTab'} component={BottomTab} />
          <RootStack.Screen name={'leaves'} component={Leaves} />
          <RootStack.Screen name={'accessories'} component={Accessories} />
          <RootStack.Screen name={'newLeave'} component={NewLeave} />
          <RootStack.Screen name={'newAccessory'} component={NewAccessory} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };

  if (true) {
    return <AfterAuthStack />;
  } else {
    return <BeforeAuthStack />;
  }
};
export default MainStack;

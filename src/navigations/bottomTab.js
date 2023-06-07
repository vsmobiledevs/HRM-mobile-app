import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HP, WP, colors} from '../utilities/exporter';
import HomeScreen from '../screens/home';
import Icons from '../assets/svgs';
import ServicesScreen from '../screens/services';
import ApprovalScreen from '../screens/approval';
import MoreScreen from '../screens/more';

const Tab = createBottomTabNavigator();
const customTabBarStyle = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#1E4485',
    elevation: 20,
    height: HP(8),
    borderTopWidth: 0,
    position: 'absolute',
  },
};

const itemStyle = {
  borderRadius: 15,
  height: HP(7),
  alignSelf: 'center',
  marginLeft: WP(3),
  marginRight: WP(3),
};

const BottomTab = () => (
  <Tab.Navigator screenOptions={customTabBarStyle} initialRouteName="home">
    <Tab.Screen
      name="Services"
      component={ServicesScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return focused ? Icons.fillServices : Icons.services;
        },
        tabBarLabel: 'Services',
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.orange,
        tabBarItemStyle: itemStyle,
      }}
    />

    <Tab.Screen
      name="home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return focused ? Icons.fillHome : Icons.home;
        },
        tabBarLabel: 'Home',
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.w1,
        tabBarItemStyle: itemStyle,
      }}
    />
    <Tab.Screen
      name="Approvals"
      component={ApprovalScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return focused ? Icons.fillApprovals : Icons.approvals;
        },
        tabBarLabel: 'Approvals',
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.w1,
        tabBarItemStyle: itemStyle,
      }}
    />
    <Tab.Screen
      name="more"
      component={MoreScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return focused ? Icons.fillMore : Icons.more;
        },
        tabBarLabel: 'More',
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.w1,
        tabBarItemStyle: itemStyle,
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default BottomTab;

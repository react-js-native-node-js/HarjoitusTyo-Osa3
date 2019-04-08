import React from 'react';

import { Icon } from 'react-native-elements';
import SuomiSaa from '../Saat/SuomiSaa';
import Lomake from '../Lomake/Lomake';
import SuomiInfo from '../Infot/SuomiInfo';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const SuomiTabit = createBottomTabNavigator(
  {
     Listaa: {
      screen: SuomiInfo,
      navigationOptions: {
        title: 'Info',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="info" size={25} color={tintColor} />
        ),
      },
    },

    Lisää: {
      screen: Lomake,
      navigationOptions: {
        title: 'Lisää',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="create" size={25} color={tintColor} />
        ),
      },
    },
  
    Sää: {
      screen: SuomiSaa,
      navigationOptions: {
        title: 'Sää',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="umbrella"
            type="font-awesome"
            size={25}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#696969',
      labelStyle: { fontSize: 16 },
    },
  }
);

export default createAppContainer(SuomiTabit);
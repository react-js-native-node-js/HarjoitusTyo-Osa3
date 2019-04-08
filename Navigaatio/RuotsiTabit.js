import React from 'react';

import { Icon } from 'react-native-elements';
import RuotsiSaa from '../Saat/RuotsiSaa';
import Lomake from '../Lomake/Lomake';
import RuotsiInfo from '../Infot/RuotsiInfo';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const RuotsiTabit = createBottomTabNavigator(
  {
     Listaa: {
      screen: RuotsiInfo,
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
      screen: RuotsiSaa,
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

export default createAppContainer(RuotsiTabit);
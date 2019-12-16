import { mapValues } from 'lodash';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../components/MainScreen/Main.screen';

const routeConfigMap = {
  MainScreen: { screen: MainScreen }
};

export const NAV_KEY = mapValues(routeConfigMap, (v, k) => k);

export default createAppContainer(
  createStackNavigator(routeConfigMap, {
    headerMode: 'none',
    initialRouteName: NAV_KEY.MainScreen
  })
);

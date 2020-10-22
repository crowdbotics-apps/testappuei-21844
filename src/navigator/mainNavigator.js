import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps156301Navigator from '../features/Maps156301/navigator';
import Add-Item156300Navigator from '../features/Add-Item156300/navigator';
import Maps156296Navigator from '../features/Maps156296/navigator';
import UserProfile156292Navigator from '../features/UserProfile156292/navigator';
import Maps156252Navigator from '../features/Maps156252/navigator';
import Add-Item156251Navigator from '../features/Add-Item156251/navigator';
import Maps156247Navigator from '../features/Maps156247/navigator';
import UserProfile156243Navigator from '../features/UserProfile156243/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps156301: { screen: Maps156301Navigator },
Add-Item156300: { screen: Add-Item156300Navigator },
Maps156296: { screen: Maps156296Navigator },
UserProfile156292: { screen: UserProfile156292Navigator },
Maps156252: { screen: Maps156252Navigator },
Add-Item156251: { screen: Add-Item156251Navigator },
Maps156247: { screen: Maps156247Navigator },
UserProfile156243: { screen: UserProfile156243Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

/** @format */

import {AppRegistry} from 'react-native';
import MyApp from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => MyApp);

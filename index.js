/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/Entrypoint';
import { name as appName } from './app.json';
import i18n from './app/config/Languages/i18n';

AppRegistry.registerComponent(appName, () => App);

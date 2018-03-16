import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('microsb', () => App);
AppRegistry.runApplication('microsb', { rootTag: document.getElementById('root') });

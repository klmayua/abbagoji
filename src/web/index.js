// index.web.js - Web Entry Point
// Entry point for the GOJI2027 Digital Majlis web application

import { AppRegistry } from 'react-native-web';
import App from '../App';

AppRegistry.registerComponent('App', () => App);

// Mount the app to the root element
const rootTag = document.getElementById('root') || document.getElementById('main');
if (rootTag) {
  AppRegistry.runApplication('App', { rootTag });
}

// Export for web builds
export default App;

// GOJI2027 Digital Majlis - Mobile App Entry Point
import { registerRootComponent } from 'expo';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}

registerRootComponent(App);

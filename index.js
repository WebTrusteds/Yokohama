/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native'
import PushNotification from 'react-native-push-notification'
import App from './App'
import './Notifications'

PushNotification.configure({
  onNotification: (notification) => { console.log('Notification', notification) },
})

if (Platform.OS === 'android') {
  AppRegistry.registerComponent('Atami', () => App)
} else {
  AppRegistry.registerComponent('Yokohama', () => App)
}

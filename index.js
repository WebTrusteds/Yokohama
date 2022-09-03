/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import App from './App';
import './Notifications';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
    onNotification: function (notification) {
        console.log("Notification", notification);
    },
})

if (Platform.OS === 'android') {
    AppRegistry.registerComponent("Atami", () => App);
} else {
    AppRegistry.registerComponent("atami", () => App);
}
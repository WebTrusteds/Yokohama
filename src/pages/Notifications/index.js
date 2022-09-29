import React, { useState, useEffect } from 'react'
import PushNotification from 'react-native-push-notification'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { 
  Container, 
  NotificationList, 
  HourMatchedContainer, 
  HourMatchedText,
} from './styles'

export default function Notifications() {
  const [HourMatched, setHourMatched] = useState(true)

  const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'notification-channel',
        channelName: 'Notification',
      },
    )
  }

  const Hour = new Date()
  const time = Hour.getHours() + ':' + Hour.getMinutes()

  useEffect(() => {
    if (
      time == '00:00' |
      time == '01:01' |
      time == '02:02' |
      time == '03:03' |
      time == '04:04' |
      time == '05:05' |
      time == '06:06' |
      time == '07:07' |
      time == '08:08' |
      time == '09:09' |
      time == '10:10' |
      time == '11:11' |
      time == '12:12' |
      time == '13:13' |
      time == '14:14' |
      time == '15:15' |
      time == '16:16' |
      time == '17:17' |
      time == '18:18' |
      time == '19:19' |
      time == '20:20' |
      time == '21:21' |
      time == '22:22' |
      time == '23:23' |
      time == '24:24'
    ) {
      setHourMatched(true)
      PushNotification.localNotification({
        channelId: 'notification-channel',
        title: 'Horas Bateram 💣',
        message: `Horas : ${time}`,
      })
    } else {
      setHourMatched(false)
    }

    createChannel()
  }, [time])

  return (
        <Container>
            <NotificationList>
                {HourMatched &&
                    (
                        <HourMatchedContainer>
                            <MaterialIcons name='notifications' size={45} color='#FF4848' />
                            <HourMatchedText>Horas Bateram 💣</HourMatchedText>
                            <HourMatchedText>{time}</HourMatchedText>
                        </HourMatchedContainer>
                    )
                }
            </NotificationList>
        </Container>
  )
}

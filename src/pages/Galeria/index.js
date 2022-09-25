import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { launchImageLibrary } from 'react-native-image-picker'
import storage from '@react-native-firebase/storage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { 
  Container, 
  NavBar, 
  NavBarLeft, 
  Button, 
  Title,
} from './styles'
import GalleryList from '../../components/Gallery/GalleryList'

export default function Galeria() {
  const navigation = useNavigation()

  const uploadFile = () => {
    const options = {
      noData: true,
      mediaType: 'photo',
    }

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Cancelouu!')
      } else if (response.error) {
        console.log('Ops parece que deu algum erro')
      } else {
        uploadFileFirebase(response)
          .then(() => {})
      }
    })
  }

  const getFileLocalPath = (response) => {
    return response.assets[0].uri
  }

  const uploadFileFirebase = async (response) => {
    const [assets] = response.assets
    const result = assets.map((item) => { return (item.fileName.slice(0, item.fileName.lastIndexOf('.'))) })
    const fileSource = getFileLocalPath(response)
    const storageRef = storage().ref('gallery').child(result[0])
    return await storageRef.putFile(fileSource)
  }

  return (
        <Container>
            <NavBar>
                <NavBarLeft>
                    <Button onPress={() => navigation.navigate('Dashboard')}>
                        <MaterialIcons name='arrow-back' size={28} color='#171717' />
                    </Button>
                    <Title>Galeria</Title>
                </NavBarLeft>
                <Button onPress={() => uploadFile()}>
                    <MaterialIcons name='add' size={28} color='#171717' />
                </Button>
            </NavBar>
            <GalleryList />
        </Container>
  )
}

import React, { useEffect, useState } from 'react';
import { Container, Picture } from './styles';
import { TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';

export default function GalleryList() {
    const [refreshing, setRefreshing] = React.useState(false);

    const [imageArray, setImageArray] = useState([]);

    function onRefresh() {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    };

    useEffect(() => {
        const fetchImages = async () => {
            let result = await storage().ref("gallery").listAll();
            let urlPromises = result.items.map((imageRef) =>
                imageRef.getDownloadURL()
            );
            return Promise.all(urlPromises);
        };

        async function loadImages() {
            const urls = await fetchImages();
            setImageArray(urls);
        };
        loadImages()
    }, [refreshing]);

    const navigation = useNavigation();

    return (
        <Container>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {
                    imageArray.map((array, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => navigation.navigate('ImageOpened', {
                                    uri: array,
                                })}
                            >
                                <Picture
                                    source={{ uri: array }}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView >
        </Container>
    )
}
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons';
import { customStyles } from '../../styles/style';


const UploadImage = ({ navigation: { navigate } }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        })();
    }, []);

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            console.log(result, "<");
            if (!result.canceled && result.assets.length > 0) {
                let newFile = {
                    uri: result.uri,
                    type: `test/${result.assets[0].uri.split(".")[1]}`,
                    name: `test.${result.assets[0].uri.split(".")[1]}`
                }
                setSelectedImage(newFile);

                let base64Img = `data:image/jpg;base64,${result.base64}`
            }
        } catch (error) {
            console.error('Image selection error:', error);
        }
    };

    const pickFromCamera = async () => {
        try {
            const granted = await ImagePicker.requestCameraPermissionsAsync();
            if (granted) {
                const result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });
                console.log(result, "<");
                if (!result.canceled && result.assets.length > 0) {
                    let newFile = {
                        uri: result.uri,
                        type: `test/${result.assets[0].uri.split(".")[1]}`,
                        name: `test.${result.assets[0].uri.split(".")[1]}`
                    }
                    setSelectedImage(newFile);
                }
            }
        } catch (error) {
            console.error('Image selection error:', error);
        }

    };

    const handleUpload = () => {
        const data = new FormData();
        data.append('file', selectedImage);
        data.append('upload_preset', 'wallet');
        data.append("cloud_name", "dl2xnil88");

        fetch("https://api.cloudinary.com/v1_1/dl2xnil88/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json()).then(data => {
            console.log(data);
            navigate('Home')
        }).catch(err => {
            console.log(err);
        })
    };
    const renderDropzone = () => {
        return (
            <TouchableOpacity onPress={selectImage} style={{ padding: 10, borderWidth: 2, borderRadius: 5, width: '100%', borderStyle: 'dashed', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: 'gray' }}>
                <Feather name="upload-cloud" size={90} color="gray" />
                <Text style={{ textAlign: "center" }}>Select Image</Text>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View
                style={{
                    padding: Spacing * 2,
                    borderColor: "red",
                    borderWidth: 1,
                    height: "100%",
                }}
            >
                <View>
                    <Text
                        style={{
                            fontSize: FontSize.xLarge,
                            color: Colors.primary,
                            fontFamily: Font['poppins-bold'],
                            marginTop: Spacing * 4,
                            textAlign: 'center'
                        }}
                    >
                        Upload a photo of your National ID Card
                    </Text>
                    <Text style={{ fontFamily: Font['poppins-semiBold'] }}>
                        Instructions:
                    </Text>
                    <Text style={{ fontFamily: Font['poppins-regular'], fontSize: FontSize.xsmall }}>1. Place your National ID card on a flat surface in a well-lit area.</Text>
                    <Text style={{ fontFamily: Font['poppins-regular'], fontSize: FontSize.xsmall }}>2. Ensure that the photo is clear and all details are visible.</Text>
                    <Text style={{ fontFamily: Font['poppins-regular'], fontSize: FontSize.xsmall }}>3. Take a photo of your National ID Card and upload it here.</Text>
                </View>

                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ marginTop: 35, justifyContent: 'center', alignItems: 'center' }}>
                        {selectedImage ? (
                            <Image source={{ uri: selectedImage.uri }} style={{ width: '100%', height: 200 }} />
                        ) : (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                               {renderDropzone()}
                                <View style={customStyles.line}></View>
                                <TouchableOpacity onPress={pickFromCamera} style={{ padding: 10, width: '100%', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: 'gray', color: 'black' }}>
                                    <Text style={{ textAlign: "center", color: Colors.primary }}>Take a Photo</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>

                </SafeAreaView>

            </View>
            <View style={customStyles.bottomButtonWrapper}>
                <TouchableOpacity
                    onPress={handleUpload}
                    style={customStyles.btnContainer}
                >
                    <Text
                        style={customStyles.btnText}
                    >
                        Upload
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default UploadImage

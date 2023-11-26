import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
import Spacing from '../../constants/Spacing';
import Font from '../../constants/Font';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { customStyles } from '../../styles/style';
import { FAB } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';


const BatchCreationScreen = () => {
    const [batchName, setBatchName] = useState('');
    const [recipients, setRecipients] = useState([{ id: '', amount: '' }]);

    const addRecipient = () => {
        setRecipients([...recipients, { id: '', amount: '' }]);
    };

    const deleteRecipient = (index) => {
        const updatedRecipients = [...recipients];
        updatedRecipients.splice(index, 1); // Remove the recipient at the specified index
        setRecipients(updatedRecipients);
    };

    const createBatch = () => {
        if (batchName && recipients.length > 0) {
            // Perform actions to create the batch using recipientList and batchName
            // For example, send a request to your backend API to create the batch
            // Reset state after batch creation
            setBatchName('');
            setRecipients([]);
            // Add logic to handle batch creation (API call, etc.)
            // ...
        } else {
            Alert.alert('Error', 'Batch Name and at least one recipient are required.');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View
                style={{
                    padding: Spacing * 2,
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: FontSize.xLarge,
                            color: Colors.primary,
                            fontFamily: Font['poppins-bold'],
                            marginTop: Spacing * 4,
                        }}
                    >
                        Create Batch
                    </Text>
                </View>
                <ScrollView>
                    <TextInput
                        placeholder="Batch Name"
                        value={batchName}
                        onChangeText={(text) => setBatchName(text)}
                        style={customStyles.textField}
                    />

                    {recipients.map((recipient, index) => (
                        <View key={index}>
                            <TextInput
                                style={customStyles.textField}
                                placeholder={`Recipient ${index + 1} ID`}
                                value={recipient.id}
                                onChangeText={(text) => handleRecipientIdChange(text, index)}
                            />
                            <TextInput
                                placeholder={`Amount for Recipient ${index + 1}`}
                                value={recipient.amount}
                                onChangeText={(text) => handleAmountChange(text, index)}
                                keyboardType="numeric"
                                style={customStyles.textField}
                            />
                            <TouchableOpacity onPress={() => deleteRecipient(index)}>
                                <AntDesign name="delete" size={24} color="red" style={{ textAlign: 'right' }} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={customStyles.bottomButtonWrapper}>
                <TouchableOpacity
                    onPress={createBatch}
                    style={customStyles.btnContainer}
                >
                    <Text
                        style={customStyles.btnText}
                    >
                        Create Batch
                    </Text>
                </TouchableOpacity>
            </View>
            <FAB
                icon="plus"
                style={customStyles.fab}
                onPress={addRecipient}
            />
        </SafeAreaView>
    );
};

export default BatchCreationScreen;

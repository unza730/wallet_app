import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { customStyles } from '../../styles/style'
import { TouchableOpacity } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import { bank } from '../../utils/bankList'


const BankList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBanks, setFilteredBanks] = useState(bank.list);

    const handleSearch = (text) => {
        setSearchTerm(text);
        const filtered = bank.list.filter((item) =>
            item.bank.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredBanks(filtered);
    };

    const handleBank = (selectedBank) => {
        // Logic when a bank is selected
        navigate('AddFunds', { selectedBank })
        console.log('Selected bank:', selectedBank);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View
                    style={{
                        padding: Spacing * 2,
                        flex: 1,
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
                           Select your Bank.
                        </Text>
                    </View>
                    <View
                        style={{
                            marginVertical: Spacing * 4,
                        }}>
                        <TextInput
                            style={customStyles.searchBar}
                            placeholder="Search banks..."
                            value={searchTerm}
                            onChangeText={handleSearch}
                        />
                        <ScrollView>
                        <FlatList
                            data={filteredBanks}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={customStyles.bankCard}
                                    onPress={() => handleBank(item)}
                                >
                                    <Text style={customStyles.bankCardText}>{item.bank}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default BankList

const styles = StyleSheet.create({})
import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Dialog, Portal, Text } from 'react-native-paper';

const WalletDialog = () => {
    const hideDialog = () => setVisible(false);

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Icon icon="alert" />
                <Dialog.Title style={styles.title}>This is a title</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">This is simple dialog</Text>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
}

export default WalletDialog

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    },
})
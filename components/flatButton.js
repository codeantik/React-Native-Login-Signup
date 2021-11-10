import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

export default function flatButton({ title, handleSubmit }) {
    return (
        <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        backgroundColor: '#f01d71',
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
})
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function item({ user }) {
    return (
        <View style={styles.userContainer}>
            <Text style={styles.userText}>{user._id}</Text>
            <Text style={styles.userText}>{user.username}</Text>
            <Text style={styles.userText}>{user.email}</Text>
            <Text style={styles.userText}>{user.password}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        flex: 1,
        backgroundColor: '#f9c2ff',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        margin: 20,
        borderRadius: 10,
    },
    userText: {
        color: 'black',
        width: '95%',
        fontSize: 20,
        backgroundColor: '#000',
        color: '#fff',
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 10,
        borderRadius: 10,
    },
})

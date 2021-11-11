import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function SingleComment({ item }) {
    return (
        <View style={styles.singleContainer}>
            <Text style={styles.singleText}>{item._id}</Text>
            <Text style={styles.singleText}>{item.comment}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    singleContainer: {
        flex: 1,
        backgroundColor: '#f9c2ff',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        margin: 20,
        borderRadius: 10,
    },
    singleText: {
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

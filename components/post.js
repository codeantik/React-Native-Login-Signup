import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'

export default function Post({ navigation}) {
    return (
        <View style={styles.postContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="#fff" />
                </TouchableOpacity>
                <Image source={require('../assets/images/headerPost.png' )} style={{ height: 30, width: 30 }}/>
                <TouchableOpacity onPress={() => navigation.navigate('Users')}>
                    <Feather name="more-horizontal" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Image source={require('../assets/images/mainPost.png' )} style={styles.mainPost}/>
            </View>
            <View style={styles.footer}>
                <View style={styles.left}>
                    <Feather name="heart" size={24} color="#fff" />
                    <Text style={{ color: 'white', fontSize: 18, paddingHorizontal: 10 }}>2,303</Text>
                    <Feather name="message-square" size={24} color="#fff" />
                    <Text style={{ color: 'white', fontSize: 18, paddingHorizontal: 10 }}>35</Text>
                </View>
                <View style={styles.right}>
                    <Feather name="bookmark" size={24} color="#fff" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        flex: 1.7,
        width: '100%',
        backgroundColor: "rgba(255, 169, 246, 1)",
        borderRadius: 30,
    },
    header: {
        flex: 1,
        // backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        padding: 20,
    },
    mainPost: {
        height: "100%", 
        width: "100%", 
        borderRadius: 30,
        borderWidth: 1,
    },
    body: {
        flex: 10,
        padding: 10,
    },
    footer: {
        flex: 1,
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 20,
    },
    left: {
        flex: 3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    right: {
        flex: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})

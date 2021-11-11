import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import axios from 'axios'
import Toast from 'react-native-toast-message'
import Item from '../components/item'

export default function Users() {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const url = 'http://192.168.43.254:5000/users/usersList'
        await axios.get(url)
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
                console.log('users', users)
            })
            .catch(err => {
                console.log(err)
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Error',
                    text2: 'Error fetching users',
                    visibilityTime: 3000
                })
            })
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <View style={styles.userContainer}>
            {users && 
                <FlatList
                    style={styles.userContent}
                    data={users}
                    renderItem={({ item }) => <Item user={item} />}
                    keyExtractor={(item) => item._id}
                />
            }
            <Toast />
        </View>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    userContent: {
        width: '100%',
    },
})

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native'
import axios from 'axios'
import Toast from 'react-native-toast-message'
import SingleComment from '../components/singleComment';

export default function AllComments() {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        const url = 'http://192.168.43.254:5000/users/comments'
        await axios.get(url)
            .then(res => {
                setComments(res.data)
                console.log(comments)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <View style={styles.commentContainer}>
            {comments && 
                <FlatList
                    style={styles.commentContent}
                    data={comments}
                    renderItem={({ item }) => <SingleComment item={item} />}
                    keyExtractor={(item) => item._id}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    commentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    commentContent: {
        width: '100%',
    },
})

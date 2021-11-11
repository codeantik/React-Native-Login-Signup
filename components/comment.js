import React, { useState } from 'react'
import { 
    StyleSheet, 
    View, 
    Text, 
    Image, 
    TextInput, 
    TouchableOpacity,
    TouchableWithoutFeedback, 
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
}   from 'react-native'
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons'
import axios from 'axios'
import Toast from 'react-native-toast-message'

export default function Comment({ navigation}) {

    const [comment, setComment] = useState('')

    const hanldeKeyboard = () => {
        Keyboard.dismiss()
    }

    const handleChange = (text) => {
        console.log('change', text)
        setComment(text)
    }

    const postComment = async (comment) => {
        const url = 'http://192.168.43.254:5000/users/comments'
        await axios.post(url, {
            comment,
        })
            .then(res => {
                console.log('res', res)
                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'Comment Posted Successfully!',
                    visibilityTime: 3000,
                })
            }).catch(err => {
                console.log('err', err)
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Failed To Post Comment!',
                    visibilityTime: 3000,
                })
            })
    }

    const handleSubmit = () => {
        console.log('submit', comment)
        postComment(comment)
        setComment('')
    }

    const handleComment = () => {
        navigation.navigate('Comments')
    }

    return (
        <TouchableWithoutFeedback onPress={hanldeKeyboard}>
            <View style={styles.commentContainer}>
                <View style={styles.comment}>
                    <Image source={require('../assets/images/person1.png')} style={styles.img}/>
                    <View style={styles.box}>
                        <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.detail}>Our blue top is available</Text>
                    </View>
                    <Feather name="heart" size={22} color="white" style={styles.heart}/>
                </View>
                <View style={styles.comment}>
                    <Image source={require('../assets/images/person2.png')} style={styles.img}/>
                    <View style={styles.box}>
                        <Text style={styles.name}>Janet Korton</Text>
                        <Text style={styles.detail}>It looks Great!</Text>
                    </View>
                    <Feather name="heart" size={22} color="white" style={styles.heart}/>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={handleComment} style={styles.img}>
                        <Image source={require('../assets/images/person3.png')} />
                    </TouchableOpacity>
                    <View style={styles.box}>
                        <TextInput 
                            multiline
                            value={comment} 
                            style={styles.input} 
                            placeholder="Write a comment..." 
                            onChangeText={handleChange}
                        />
                    </View>
                    <TouchableOpacity style={styles.heart} onPress={handleSubmit}>
                        <Ionicons name="send-outline" size={22} color="black" />
                    </TouchableOpacity>
                </View>
                <Toast />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    commentContainer: {
        flex: 1,
        height: '100%',
        backgroundColor: "rgba(0, 0, 0, 1)",
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    comment: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    box: {
        flex: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    img: {
        flex: 1.8,
        width: '100%',
        height: '100%',
        // backgroundColor: 'green',
        transform: [{ scale: 0.3 }],
    },
    heart: {
        flex: 1,
    },
    name: {
        color: 'gray',
        fontSize: 15,
    },
    detail: {
        color: 'white',
        fontSize: 18,
    },
    bottom: {
        width: '100%',
        borderRadius: 30,
        backgroundColor: '#fff',
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    input : {
        flex: 0.5,
        color: '#000',
    },
})

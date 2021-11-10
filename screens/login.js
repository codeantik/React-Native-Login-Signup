import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import FlatButton from '../components/flatButton'
import axios from 'axios'
import Toast from 'react-native-toast-message'

const signupSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
})

export default function Signup({ route, navigation}) {
    // console.log(route.params)

    const handleClick = () => {
        navigation.navigate('Signup')
    }

    const handleLogin = async (credentials) => {
        if(!credentials.email || !credentials.password) {
            return Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Email or Password is empty',
                visibilityTime: 3000
            })
        }
        const url = 'https://node-auth-server.herokuapp.com/users/login'
        await axios.post(url, credentials, {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json"
                }
            })
            .then(res => {
                console.log(res)
                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'Login Successful',
                    text2: 'Welcome back',
                    visibilityTime: 3000,
                })
                navigation.navigate('Home')
            })
            .catch(err => {
                console.log(err)
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Login Failed',
                    text2: 'Please try again',
                    visibilityTime: 3000,
                })
            })

    }

    return (
        <View style={styles.signupContainer}>
            <Text style={styles.signupHead}>Log In</Text>
            <Formik
                style={styles.signupForm}
                initialValues={{ email: '', password: '' }}
                validationSchema={signupSchema}
                onSubmit={(values, actions) => {
                    console.log(values)
                    handleLogin(values)
                    // actions.resetForm()
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.signupInput}
                            placeholder="Email"
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            onBlur={props.handleBlur('email')} 
                        />
                        <Text style={styles.errorText}>
                            {props.touched.email && props.errors.email}
                        </Text>
                        <TextInput
                            style={styles.signupInput}
                            placeholder="Password"
                            onChangeText={props.handleChange('password')}
                            value={props.values.password} 
                            onBlur={props.handleBlur('password')}  
                        />
                        <Text style={styles.errorText}>
                            {props.touched.password && props.errors.password}
                        </Text>
                        <FlatButton title='Submit' handleSubmit={props.handleSubmit}/>
                        <View style={styles.linkContainer}>
                            <Text style={{ textAlign: 'center' }}>Don't have an account?</Text>
                            <TouchableOpacity onPress={handleClick}>
                                <Text style={styles.link}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
            <Toast />
        </View>
    )
}

const styles = StyleSheet.create ({
    signupContainer: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
    },
    signupForm: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginVertical: 2,
    },
    signupHead: {
        textAlign: 'center',
        fontSize: 28,
        minHeight: 50,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    },
    linkContainer: {
        marginTop: 20,
        textAlign: 'center',
        backgroundColor: '#ddd',
        fontSize: 16,
        paddingVertical: 5,
        maxHeight: 50,
    },
    link: {
        color: '#0066ff',
        // textDecorationLine: 'underline',
        textAlign: 'center',
        // backgroundColor: 'green',
        height: '100%',
        fontSize: 16,
        marginLeft: 5,
    },
})

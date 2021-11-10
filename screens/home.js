import React from 'react';
import { StyleSheet, View } from 'react-native';
import Post from '../components/post';
import Comment from '../components/comment';

export default function Home({ route, navigation }) {

  console.log(route.params)

  return (
    <View style={styles.homeContainer}>
      <Post navigation={navigation} />
      <Comment />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
});

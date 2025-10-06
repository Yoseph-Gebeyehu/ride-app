import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/login'); // navigates to Login page
    }, 3000); // 2 seconds delay

    return () => clearTimeout(timer); // cleanup timer
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/splash.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Power by Ride</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // make it fill the screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // optional
  },
  image: {
    width: '80%',
    height: '50%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
});

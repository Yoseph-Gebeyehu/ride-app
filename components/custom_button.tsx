import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomButton({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) {
  return (
    <View style={styles.loginContainer}>
      <TouchableOpacity style={styles.loginButton} onPress={onPress}>
        <Text style={styles.loginButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    width: '90%',
    marginBottom: 10,
    padding: 10,
  },
  loginButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  loginButton: {
    marginBottom: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 10,
  },
});

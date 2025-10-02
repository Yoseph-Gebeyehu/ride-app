import CustomButton from '@/components/custom_button';
import CustomTextField from '@/components/custom_text_field';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function HomeScreen() {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.circularContainer1}></View>
        <View style={styles.circularContainer2}></View>
        <Text style={styles.title}>Welcome back</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Phone number</Text>
          <CustomTextField
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Password</Text>
          <CustomTextField
            placeholder="Enter your password"
            keyboardType="default"
          />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUp}> Don&apos;t have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpButton}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <CustomButton text="Login" onPress={() => {}} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  circularContainer1: {
    position: 'absolute',
    backgroundColor: '#D9D9D95C',
    width: 200,
    height: 200,
    top: -10,
    right: -30,
    borderRadius: 200,
  },
  circularContainer2: {
    position: 'absolute',
    backgroundColor: '#D9D9D9',
    width: 200,
    height: 200,
    top: -20,
    right: -50,
    borderRadius: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  inputWrapper: {
    width: '90%',
    marginBottom: 30,
  },
  forgotPasswordContainer: {
    width: '90%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPassword: {
    fontSize: 16,
    color: 'gray',
  },

  signUp: {
    fontSize: 16,
    color: 'gray',
  },
  signUpButton: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: 'gray',
  },
  signUpContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
    marginBottom: 40,
  },
});

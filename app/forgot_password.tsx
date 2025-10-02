import CustomButton from '@/components/custom_button';
import CustomCircularContainer from '@/components/custom_circular_container';
import CustomTextField from '@/components/custom_text_field';
import { router } from 'expo-router';
import {
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

export default function ForgotPasswordScreen() {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleForgotPassword = () => {
    router.push('/forgot_password');
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.circularContainer}>
          <CustomCircularContainer />
        </View>
        <Text style={styles.title}>Forgot password</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email</Text>
          <CustomTextField
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <CustomButton text="Reset password" onPress={() => {}} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  circularContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 450,
    justifyContent: 'center',
    alignItems: 'center',
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

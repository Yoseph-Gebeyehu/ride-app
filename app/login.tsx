import CustomButton from '@/components/custom_button';
import CustomCircularContainer from '@/components/custom_circular_container';
import CustomTextField from '@/components/custom_text_field';
import { router } from 'expo-router';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function LoginScreen() {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSignUp = () => {
    router.replace('/signup');
  };

  const handleForgotPassword = () => {
    router.push('/forgot_password');
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <CustomCircularContainer />
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
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUp}> Don&apos;t have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpButton}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <CustomButton text="Login" onPress={() => {}} />
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

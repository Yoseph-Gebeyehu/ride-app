import CustomButton from '@/components/custom_button';
import CustomCircularContainer from '@/components/custom_circular_container';
import CustomTextField from '@/components/custom_text_field';
import { router } from 'expo-router';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function SignupScreen() {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSignUp = () => {
    router.replace('/login');
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <CustomCircularContainer />
        <Text style={styles.title}>Create an account</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Name</Text>
          <CustomTextField
            placeholder="Enter your name"
            keyboardType="default"
          />
        </View>
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

        <View style={styles.signUpContainer}>
          <Text style={styles.signUp}> Already have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpButton}>Log in</Text>
          </TouchableOpacity>
        </View>

        <CustomButton text="Sign up" onPress={() => {}} />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
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

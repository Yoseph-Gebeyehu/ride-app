import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native';

export default function CustomTextField({
  placeholder,
  keyboardType,
}: {
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 0.4,
    borderRadius: 10,
    padding: 10,
  },
  input: {
    fontSize: 16,
    color: 'black',
    padding: 0,
  },
});

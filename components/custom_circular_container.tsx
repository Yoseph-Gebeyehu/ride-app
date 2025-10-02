import { StyleSheet, View } from 'react-native';
export default function CustomCircularContainer() {
  return (
    <View>
      <View style={styles.circularContainer1}></View>
      <View style={styles.circularContainer2}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  circularContainer1: {
    position: 'absolute',
    backgroundColor: '#D9D9D95C',
    width: 200,
    height: 200,
    top: -280,
    right: -250,
    borderRadius: 200,
  },
  circularContainer2: {
    position: 'absolute',
    backgroundColor: '#D9D9D9',
    width: 200,
    height: 200,
    top: -290,
    right: -270,
    borderRadius: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

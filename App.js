import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,SafeAreaView, Button, View } from 'react-native';

export default function App() {
console.log("app executwd");


  return (
    <SafeAreaView style = {styles.container}>
    
    <Button title="Click Me!" onPress={() => console.log("Button Clicked!")} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

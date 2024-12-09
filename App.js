import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import strings from './app/utils/Translet';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the Ionicons icon set

strings.setLanguage('es');

const Stack = createStackNavigator();

// Function to generate PDF
const generatePDF = async () => {
  try {
    const htmlContent = `
      <h1 style="text-align: center; color: blue;">${strings.helloWorld}</h1>
      <p style="text-align: center;">${strings.detailsScreen}</p>
    `;

    const options = {
      html: htmlContent,
      fileName: 'sample',
      directory: 'Download',
    };

    const file = await RNHTMLtoPDF.convert(options);
    Alert.alert('PDF Generated', `PDF saved at: ${file.filePath}`);
  } catch (error) {
    Alert.alert('Error', 'Failed to generate PDF');
    console.error(error);
  }
};

// Home Screen Component
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Icon name="home" size={50} color="blue" />
        <Text style={styles.helloText}>{strings.helloWorld}</Text>
        <Button title={strings.goToDetails} onPress={() => navigation.navigate('Details')} />
        <Button title="Generate PDF" onPress={generatePDF} />
      </View>
    </SafeAreaView>
  );
};

// Details Screen Component
const DetailsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Icon name="information-circle" size={50} color="green" /> {/* Add an icon */}
        <Text style={styles.detailsText}>{strings.detailsScreen}</Text>
        <Button title={strings.goBack} onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

// Main App Component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: strings.homeTitle }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: strings.detailsTitle }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'blue',
  },
  detailsText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'green',
  },
});

export default App;

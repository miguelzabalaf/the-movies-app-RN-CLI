import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
export default function App() {

  return (
    <PaperProvider>
      <SafeAreaView>
        <View>
          <Text>Hello World RN-CLI</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );

}
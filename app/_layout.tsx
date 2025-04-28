import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'

const App = () => {
  return (
	<SafeAreaProvider>
		<RootNavigation/>
		<StatusBar style='auto'/>
	</SafeAreaProvider>
  )
}

const RootNavigation = () => {
	return <Stack>
		 <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
	 </Stack>
 }
 
export default App
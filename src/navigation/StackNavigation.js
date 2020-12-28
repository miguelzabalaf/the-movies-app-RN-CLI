import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';

const Stack = createStackNavigator();

export default function StackNavigation(props) {

  const { navigation } = props

  const buttonLeftIcon = () => {
    return (
      <IconButton
        icon="menu"
        onPress={ () => navigation.openDrawer() }
      />
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
       name="home" 
       component={ Home } 
       options={{ title: "Home", headerLeft: () => buttonLeftIcon() }} 
      />
      <Stack.Screen
       name="movie" 
       component={ Movie } 
       options={{ title: "", headerLeft: () => buttonLeftIcon() }} 
      />
      <Stack.Screen
       name="popular" 
       component={ Popular } 
       options={{ title: "Popular Movies", headerLeft: () => buttonLeftIcon() }} 
      />
      <Stack.Screen
       name="news" 
       component={ News } 
       options={{ title: "New Movies", headerLeft: () => buttonLeftIcon() }} 
      />
      <Stack.Screen
       name="search" 
       component={ Search } 
       options={{ title: "", headerLeft: () => buttonLeftIcon() }} 
      />
    </Stack.Navigator>
  )
}
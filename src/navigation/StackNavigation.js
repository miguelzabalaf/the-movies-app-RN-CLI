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

  const buttonMenuIconAndGoBack = (screen) => {

    switch (screen) {
      case "search":
      return (
        <IconButton
          icon="arrow-left"
          onPress={ () => navigation.goBack() }
        />
      )

      default:
        return (
          <IconButton
            icon="menu"
            onPress={ () => navigation.openDrawer() }
          />
        );
    }

  }

  const buttonSearchIcon = () => {
    return (
      <IconButton
        icon="magnify"
        onPress={ () => navigation.navigate("search") }
      />
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
       name="home" 
       component={ Home } 
       options={{ 
         title: "Home", 
         headerLeft: () => buttonMenuIconAndGoBack("home"), 
         headerRight: () => buttonSearchIcon()
       }} 
      />
      <Stack.Screen
       name="movie" 
       component={ Movie } 
       options={{ 
         title: "Movie", 
         headerLeft: () => buttonMenuIconAndGoBack("movie"), 
         headerRight: () => buttonSearchIcon()
       }} 
      />
      <Stack.Screen
       name="popular" 
       component={ Popular } 
       options={{ 
         title: "Popular", 
         headerLeft: () => buttonMenuIconAndGoBack("popular"), 
         headerRight: () => buttonSearchIcon()
       }} 
      />
      <Stack.Screen
       name="news" 
       component={ News } 
       options={{ 
         title: "News", 
         headerLeft: () => buttonMenuIconAndGoBack("news"), 
         headerRight: () => buttonSearchIcon()
       }} 
      />
      <Stack.Screen
       name="search" 
       component={ Search } 
       options={{ 
         title: "", 
         headerLeft: () => buttonMenuIconAndGoBack("search") 
       }} 
      />
    </Stack.Navigator>
  )
}
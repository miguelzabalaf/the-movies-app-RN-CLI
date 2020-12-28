import React, { useState } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { StyleSheet, View, Text } from 'react-native';
import { Drawer, IconButton, Switch, TouchableRipple } from 'react-native-paper';
import usePReferences from '../hooks/usePReferences';

export default function DrawerContent(props) {

  const [active, setActive] = useState('Home')
  const { navigation } = props;
  const { theme, toggleTheme } = usePReferences();

  const handleNavigateTo = (screenName) => {
    setActive(screenName);
    navigation.navigate(screenName);
  }
  const handleIconItemMenu = (iconName, color) => {
    return (
      <IconButton icon={iconName} color={color} />
    )
  }


  const onToggleSwitchForTheme = () => {
    seIsDarkTheme(!isDarkTheme);
  }
  // console.log('Drawer content props:', props);

  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item 
          label="Home"
          active={active  === "home"}
          icon={ ({color}) => handleIconItemMenu('home', color) }
          onPress={ () => handleNavigateTo('home') }
        />
        <Drawer.Item 
          label="News"
          active={active  === "news"}
          icon={ ({color}) => handleIconItemMenu('alert-decagram', color) }
          onPress={ () => handleNavigateTo('news') }
        />
        <Drawer.Item 
          label="Popular"
          active={active  === "popular"}
          icon={ ({color}) => handleIconItemMenu('cards-heart', color) }
          onPress={ () => handleNavigateTo('popular') }
        />
      </Drawer.Section>
      <Drawer.Section title="Options">
        <TouchableRipple>
          <View style={styles.preferences}>
            <Text style={{color: theme === 'dark' ? "#FFF" : "#666", fontWeight: "normal"}}>Dark Theme</Text>
            <Switch value={theme === 'dark' ? true : false} onValueChange={toggleTheme} />
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  preferences: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    paddingVertical: 12,
    paddingHorizontal: 16
  },

})


import React, { useMemo, useState } from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider, DarkTheme as DarkThemePaper, DefaultTheme as DefaultThemePaper } from 'react-native-paper';
import { NavigationContainer, DarkTheme as DarkThemeNavigation, DefaultTheme as DefaultThemeNavigation } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import PreferencesContext from './src/context/PreferencesContext';

export default function App() {

  const [theme, setTheme] = useState('dark');

  // console.log(DarkThemePaper);
  DefaultThemePaper.colors.primary = "#1f6f8b";
  DarkThemePaper.colors.primary ="#1f6f8b"
  DarkThemePaper.colors.accent = "#1f6f8b"

  DarkThemeNavigation.colors.background = "#111"
  DarkThemeNavigation.colors.card = "#222"

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const preference = useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );

  return (
    <PreferencesContext.Provider value={ preference }>
      <PaperProvider theme={ theme === 'dark' ? DarkThemePaper : DefaultThemePaper }>
        <NavigationContainer theme={ theme === 'dark' ? DarkThemeNavigation : DefaultThemeNavigation }>
          <StatusBar barStyle={ theme === 'dark' ? 'light-content' : 'dark-content' } backgroundColor={ theme === 'dark' ? "#222" : '#fff' }/>
          <Navigation/>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );

}
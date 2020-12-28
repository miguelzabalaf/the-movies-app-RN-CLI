import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getNowPlayingMoviesApi } from '../services/movies';

export default function Home() {

  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  console.log('nowPlayingMovies', nowPlayingMovies);

  useEffect(() => {
    getNowPlayingMoviesApi().then( (data) => {
      // console.log('getNowPlayingMoviesApi', data);
      setNowPlayingMovies(data.results);
    } )
  }, [])

  return (
    <ScrollView>
      <Text>Home</Text>
    </ScrollView>
  );
}
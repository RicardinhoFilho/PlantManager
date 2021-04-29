import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from "./src/pages/Welcome";
import { UserIdentification } from "./src/pages/UserIdentification";
import Routes from "./src/Routes";

export default function App() {


  return (
    <Routes />
  );
}


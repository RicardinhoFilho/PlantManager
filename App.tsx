import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Welcome} from "./src/pages/Welcome";
import {UserIdentification} from "./src/pages/UserIdentification";
import{Confirmation} from "./src/pages/Confirmation"

export default function App() {

 
  return (
    <Confirmation/>
  );
}


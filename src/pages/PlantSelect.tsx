import React, { useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from "react-native";
import colors from '../styles/colors';
import {Header} from "../Components/Header";
import { EnviromentButton } from '../Components/EnviromentButton';
export const PlantSelect = () => {

    return (
        
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Header/>
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
        </View>

        <View>
            
        </View>

       

    </SafeAreaView>
    );
    
    
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    header:{
        paddingHorizontal:30
    },
    title:{
        fontSize:17,
        color:colors.heading,
        lineHeight:20,
        marginTop:15
    },
    subtitle: {
        fontSize:17,
        lineHeight:20,
        color: colors.heading
    },
})
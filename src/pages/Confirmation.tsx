import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Button } from "../Components/Button";
import colors from '../styles/colors';


export const Confirmation = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.emoji}>😁</Text>
                <Text style={styles.title}>Prontinho</Text>
                <Text style={styles.subtitle}>Agora vamos começar a cuidar de suas plantinhas com muito carinho!</Text>

                <View style={styles.footer}>
                    <Button title="Começar" />
                </View>
            </View>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 30
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        color: colors.heading

    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        marginTop:8,
        paddingHorizontal: 20,
        color: colors.heading
    },
    emoji: {
        fontSize: 70,
        textAlign: "center",
    },
    footer: {
        width: "100%",
        marginTop:20,
        paddingHorizontal: 50
    }
})
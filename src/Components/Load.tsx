import React from 'react';
import { StyleSheet, View} from "react-native";
import LottieView from "lottie-react-native";

import loadAnimation from "../../assets/load.json";
import colors from '../styles/colors';

export function Load() {

    <View style={styles.container}>
        <LottieView style
            source={loadAnimation}
            autoPlay
            loop
            style = {styles.animation}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    animation: {
        backgroundColor: "transparent",
        height:200
    }
})
import React from 'react';
import { StyleSheet, Text, View, } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import colors from "../styles/colors";

interface EnviromentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export const EnviromentButton = ({ title, active = false, ...rest }: EnviromentButtonProps) => {
    return (
        <View>
        <RectButton style={[styles.button, active && styles.buttonActive]} {...rest}>
            <Text style={[styles.textButton, active && styles.textButtonActive]}>{title}</Text>
        </RectButton>
        </View>
        
    );
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: colors.shape,
        height: 40,
        width: 76,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12
    },
    buttonActive: {
        backgroundColor:colors.green_light,
        
    },
    textButton: {
        color: colors.heading,
    },
    textButtonActive: {
        color: colors.green_dark,
    }
})

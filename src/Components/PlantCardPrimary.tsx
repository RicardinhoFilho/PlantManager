import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import colors from '../styles/colors';
import{SvgFromUri} from "react-native-svg";

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
    }
}

export const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
    return (
        <RectButton style={styles.container} {...rest}>

            
            <Text style={styles.textButton}>
                {data.name}{"\n"}
                <SvgFromUri uri={data.photo} width={70} height={70} style={styles.plantImage}/>
            </Text>
            
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: "45%",
        backgroundColor: colors.shape,
        borderRadius: 20,
        margin: 10
    },
    textButton: {
        color: colors.green_dark,
        marginVertical:16,
        textAlign: "center",
    },
    plantImage: {
        marginLeft: 10,
    }
})
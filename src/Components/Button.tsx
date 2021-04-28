import React from 'react';
import colors from "../styles/colors"
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from "react-native";
//@expo/vector-icons
interface ButtonProps extends TouchableOpacityProps{
    title:string;
}

export const Button = ({title, ...rest}: ButtonProps)=>{
    return(
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
       backgroundColor: colors.green,
       height:56,
       borderRadius:16,
       justifyContent:"center",
       alignItems: "center",
        
    },
    
    buttonText: {
       fontSize:16,
       color:colors.white ,
       padding:15
    }
})
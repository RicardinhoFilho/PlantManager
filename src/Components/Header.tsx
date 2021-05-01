import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image} from "react-native";
import colors from '../styles/colors';
import{getStatusBarHeight} from "react-native-iphone-x-helper"
import userImg from "../../assets/user.jpeg";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header(){

    const [userName, setUserName] = useState<string>();
    useEffect(() => {
        async function loadUserNamename(){
            const user = await AsyncStorage.getItem("@plantmanagerUser");

            setUserName(user || "")
        }

        loadUserNamename()
    },[userName])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>  
                
                <Text style={styles.userName}>{userName}</Text> 
                </View>
           
           <Image source={userImg} style={styles.image}/>
           
           
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
        marginTop:40
    },
    image: {
        width:80,
        height:80,
        borderRadius:40
    },
    greeting: {
        fontSize:32,
        color: colors.heading
    },
    userName: {
        fontSize:32,
        color: colors.heading,
        lineHeight:40
    }
})
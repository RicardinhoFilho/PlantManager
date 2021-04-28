import React,{useState} from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions, View } from "react-native";
import wateringImg from "../../assets/watering.png";
import colors from "../styles/colors"
import {Feather} from "@expo/vector-icons"

export const Welcome = () => {
 const [visible, setVisible] = useState(false)
 const handleVisibility = ()=>{
     setVisible(true);
 }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
            <Text style={styles.title}>Gerencie {"\n"}
             suas plantas {"\n"}
             de forma fácil</Text>
            <Image source={wateringImg} style={styles.image} resizeMode="contain"/>
            <Text style={styles.subtitle}> Não esqueça mais de regar suas plantas.
            Nós cuidamos de lembrar você sempre que precisar!
           </Text>
           <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text><Feather name="chevron-right" style={styles.buttonIcon}/></Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.heading,
        marginTop: 20

    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    
    image: {
        
        height: Dimensions.get("window").width * 0.7
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    
    buttonIcon: {
        color: colors.white,
        fontSize: 30
    }, 
    wrapper:{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal:20
    }
})
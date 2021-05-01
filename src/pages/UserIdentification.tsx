import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert,SafeAreaView, View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from "react-native";
import colors from '../styles/colors';
import { Button } from "../Components/Button"
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserIdentification = () => { 

    const handleSubmit = async() => {

        if(!name) return Alert.alert("Me diz como chamar voce 😢");

        await AsyncStorage.setItem("@plantmanagerUser",name)
        
        navigation.navigate("Confirmation");
    }

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setIsName] = useState<string>( );

    const navigation = useNavigation();
useEffect(() => {
    async function getUser(){
        const user = await AsyncStorage.getItem("@plantmanagerUser")|| "";
        setIsName(user)
    }
    
})


    const handleInputChange = (value: string) => {
        setIsFilled(!!value);
        setIsName(value);
    }

    const handleInputBlur = () => {
        setIsFocused(false);
    }

    const handleInputFocus = () => {
        setIsFocused(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.form}>

                        <Text style={styles.title}>Como podemos {"\n"} chamar você?
                    <Text style={styles.emoji}>{"\n\n"}{isFilled ? "😁" : " 🤔"}</Text>
                        </Text>
                        <TextInput value={name}style={[styles.input, (isFocused || isFilled) && { borderColor: colors.green }]} placeholder="Digite seu Nome" onBlur={handleInputBlur} onFocus={handleInputFocus} onChangeText={handleInputChange} />

                        <View style={styles.footer}>
                            <Button title="Confirmar" onPress={handleSubmit}/>
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
           


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: "100%"
    },
    form: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 54,
        alignItems: "center",
    },
    emoji: {
        fontSize: 50
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: "100%",
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: "center",
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: "center",
        color: colors.heading
    },
    footer: {
        marginTop: 80,
        width: "100%"
    }
})
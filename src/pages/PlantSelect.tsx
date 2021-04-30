import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import colors from '../styles/colors';
import { Header } from "../Components/Header";
import { EnviromentButton } from '../Components/EnviromentButton';
import api from '../services/api';
import { PlantCardPrimary } from '../Components/PlantCardPrimary';
import {Load} from "../Components/Load"
export const PlantSelect = () => {

    interface EnvironmentProps {
        key: string;
        title: string;
    }
    interface PlantProps {
        id: string;
        name: string;
        about: string;
        water_tips: string;
        photo: string;
        environments: [string];
        frequency: {
            times: number;
            repeat_every: string;
        }
    }
    const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setfilteredPlants] = useState<PlantProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState("all")

    const handleEnviromentSelected = (environment:string)=>{
        setEnvironmentSelected(environment)

        if(environmentSelected == "all") return setfilteredPlants(plants);
        
        const filtered = plants.filter(plant => plant.environments.includes(environment))
        setfilteredPlants(filtered);
    }

    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get("plants_environments?_sort=title&_order=asc");
            setEnvironments([{ key: "all", title: "Todos" }, ...data])
        }

        fetchEnviroment()
    }, [])

    useEffect(() => {
        async function fetchPlants() {
            const { data } = await api.get("plants?_sort=name&_order=asc");
            setPlants(data)
        }

        fetchPlants()
    },[])



    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header />
                <Text style={styles.title}>Em qual ambiente</Text>
                <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
            </View>

            <View>
                <FlatList data={environments} renderItem={({ item }) => {
                    return <EnviromentButton title={item.title}
                    onPress={()=>{
                        handleEnviromentSelected(item.key);
                    }}
                     active ={item.key === environmentSelected}
                    
                     />
                }}
                    horizontal/*Alinhando botões na horizontal*/
                    showsHorizontalScrollIndicator={false}/*Retirando vizualização do scroll */
                    contentContainerStyle={styles.buttonList} />
            </View>

            <View style={styles.plants}>
                <FlatList data={filteredPlants} renderItem={({item}) => {
                    return  (<PlantCardPrimary data={item}/>)
                }} 
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.plantList}
                
                />
            </View>


        </SafeAreaView>
    );



}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading
    },
    buttonList: {
        height: 40,
        justifyContent: "center",
        paddingBottom: 5,
        marginLeft: 10,
        marginVertical: 32
    },
    plants: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: "center",
    },
    plantList:{

    }
})
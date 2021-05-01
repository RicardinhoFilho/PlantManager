import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import colors from '../styles/colors';
import { Header } from "../Components/Header";
import { EnviromentButton } from '../Components/EnviromentButton';
import api from '../services/api';
import { PlantCardPrimary } from '../Components/PlantCardPrimary';
import { Load } from "../Components/Load"
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    const [environmentSelected, setEnvironmentSelected] = useState("all");
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loadedAll, setLoadedAll] = useState(false);

    const handleEnviromentSelected = (environment: string) => {
        setEnvironmentSelected(environment)

        if (environmentSelected == "all") {
            setfilteredPlants(plants)
        } else {
            const filtered = plants.filter(plant => plant.environments.includes(environment))
            setfilteredPlants(filtered);
        }


    }


    async function fetchPlants() {
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

        if (!data) return setLoading(true)

        if (page > 1) {
            setPlants(oldValue => [...oldValue, ...data])
            setfilteredPlants(oldValue => [...oldValue, ...data])
        } else {
            setPlants(data)
            setfilteredPlants(data)
        }

        setLoading(false);
        setLoadingMore(false)

    }

    const handleFetchMore = async (distance: number) => {
        if (distance < 1) return

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlants()
    }

   

    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get(`plants_environments?_sort=title`);
            setEnvironments([{ key: "all", title: "Todos" }, ...data])
        }

        fetchEnviroment()
    }, []);

    useEffect(() => {

        fetchPlants()
    }, []);


     if (loading) return <Load />

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
                        onPress={() => {
                            handleEnviromentSelected(item.key);
                        }}
                        active={item.key === environmentSelected}

                    />
                }}
                    horizontal/*Alinhando botões na horizontal*/
                    showsHorizontalScrollIndicator={false}/*Retirando vizualização do scroll */
                    contentContainerStyle={styles.buttonList} />
            </View>

            <View style={styles.plants}>
                <FlatList data={filteredPlants} renderItem={({ item }) => {
                    return (<PlantCardPrimary data={item} />)
                }}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => { handleFetchMore(distanceFromEnd) }}
                    ListFooterComponent={
                        loadingMore ?
                            <ActivityIndicator color={colors.green} /> : <></>
                    }
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
    plantList: {

    }
})
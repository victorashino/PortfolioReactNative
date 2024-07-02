import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { getNowPlaying } from "./services/cineNowAPI";

const MovieListScreen = () => {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const data = await getNowPlaying();
                setMovies(data);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
            }
        };

        fetchPopularMovies();
    }, []);

    const renderMovieItem = ({ item }: { item: any }) => (
        <View style={styles.card}>
            <Image
                style={styles.poster}
                source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                resizeMode="cover"
            />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.overview}>{item.overview}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                renderItem={renderMovieItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFF",
    },
    list: {
        padding: 10,
    },
    card: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        elevation: 5,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    poster: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: "100%",
        height: 300,
    },
    cardContent: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    overview: {
        fontSize: 16,
        color: "#666",
    },
});

export default MovieListScreen;

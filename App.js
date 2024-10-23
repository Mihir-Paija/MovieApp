import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { fetchMovies } from "./api";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import moviesReducer from "./movieSlice";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MoviesListing from "./movieListing";
import ShortlistedMovies from "./shortListedMovies";
import Home from "./home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchMovies();
        // console.log(movies); // Do something with the movies data
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View> */}
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
              name="Movies"
              component={MoviesListing}
              options={{
                tabBarLabel: "Movies",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="movie"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Shortlisted"
              component={ShortlistedMovies}
              options={{
                tabBarLabel: "Shortlisted",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="bookmark"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

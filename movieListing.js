import { useQuery } from "react-query";
import { fetchMovies } from "./api";
import { useDispatch } from "react-redux";
import { addMovie } from "./movieSlice";
import { StyleSheet, FlatList, Button, Text, View } from "react-native";
import MovieCard from "./movieCard";
import { useNavigation } from "@react-navigation/native";

export default function MoviesListing() {
  const { data, isLoading, error } = useQuery("movies", fetchMovies);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading movies</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <MovieCard
              title={item.title}
              overview={item.overview}
              imageUrl={item.poster_path}
              releaseDate={item.releaseDate}
              popularity={item.popularity}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              btntitle="Shortlist"
              btnHandler={() => {
                dispatch(addMovie(item));
                navigation.navigate("Shortlisted");
              }}
            />
            {/* <Text>{item.title}</Text> */}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 10,
    // alignContent: "center",
    // justifyContent: "center",
    // alignItems: "center",
    // marginHorizontal: 10,
  },
});

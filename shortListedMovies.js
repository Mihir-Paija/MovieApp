import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "./movieSlice";
import { StyleSheet, FlatList, Button, Text, View } from "react-native";
import MovieCard from "./movieCard";

export default function ShortlistedMovies() {
  const shortlisted = useSelector((state) => state.movies.shortlisted);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {shortlisted.length == 0 ? (
        <Text>No shortlisted movies</Text>
      ) : (
        <FlatList
          data={shortlisted}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              {/* {console.log(item)} */}
              <MovieCard
                title={item.title}
                overview={item.overview}
                imageUrl={item.poster_path}
                releaseDate={item.releaseDate}
                popularity={item.popularity}
                voteAverage={item.voteAverage}
                voteCount={item.vote_count}
                btntitle="Remove"
                btnHandler={() => dispatch(removeMovie(item))}
              />
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // flex: 1,
    // alignContent: "center",
    // justifyContent: "center",
    // alignItems: "center",
    // marginHorizontal: 10,
  },
});

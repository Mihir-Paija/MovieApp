import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Button from "./button";

const MovieCard = ({
  title,
  overview,
  imageUrl,
  releaseDate,
  popularity,
  voteAverage,
  voteCount,
  isShortlisted,
  btntitle,
  btnHandler,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image
          source={{ uri: "https://image.tmdb.org/t/p/w500" + imageUrl }}
          style={styles.image}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.overview} numberOfLines={3}>
          {overview}
        </Text>

        <Text style={styles.detailText}>Release Date: {releaseDate}</Text>
        <Text style={styles.detailText}>Popularity: {popularity}</Text>
        <Text style={styles.detailText}>Rating: {voteAverage}</Text>
        <Text style={styles.detailText}>no. of count: {voteCount}</Text>

        <Button
          Btntitle={btntitle}
          onPress={btnHandler}
          disabled={false}
          //   disable={isShortlisted && btntitle == "Shortlist"}
        />
      </View>
      {/* </View> */}
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    alignSelf: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 2,
    width: "95%",
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
  },
  cardContent: {
    // flexDirection: "row",
    padding: 10,
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 200,
    marginRight: 5,
    borderRadius: 5,
  },
  details: {
    paddingVertical: 10,
    justifyContent: "space-between",
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  overview: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
    flexWrap: "wrap",
    maxHeight: 60,
  },
  detailText: {
    fontSize: 12,
    color: "#555",
    marginBottom: 5,
  },
});

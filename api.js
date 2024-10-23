import axios from "axios";

export const fetchMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=8cb61f976fc8445772bd6cb7e260eba6`
  );
  //   console.log(response);
  return response.data.results;
};

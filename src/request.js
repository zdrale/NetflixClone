const API_KEY = "97061bfdb81843af7850a6ee91eb744a";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie/api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres27`,
  fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie/?api_key=${API_KEY}&with_genres=99`,
};

export default request;
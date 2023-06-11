import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import request from "./request";
import Row from "./Row";

function HomeScreen() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="Netflix originals"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending now" fetchUrl={request.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} isLargeRow />
      <Row title="Action movies" fetchUrl={request.fetchActionMovies} />
      {/* <Row title="Comedy movies" fetchUrl={request.fetchComedyMovies} /> */}
      <Row title="Horror movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;

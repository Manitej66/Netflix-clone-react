import React from "react";
import Row from "./Row";
import requests from "./request";
import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        url={requests.fetchNetflixOriginals}
        poster={true}
      />
      <Row title="Top Rated" url={requests.fetchTopRated} />
      <Row title="Action Movies" url={requests.fetchActionMovies} />
      <Row title="Horror Movies" url={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" url={requests.fetchRomanticMovies} />
      <Row title="Comedy Rated" url={requests.fetchComedyMovies} />
      <Row title="Documentaries" url={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

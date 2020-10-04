import React from 'react';
import Header from "./components/header.components/Header";
import MovieCatalogue from "./components/movie-catalogue.components/MovieCatalogue";
import Footer from "./components/footer.components/Footer";
import "./global.styles.css"

function App() {
  return (
    <div className="app">
      <Header/>
      <MovieCatalogue/>
      <Footer/>
    </div>
  );
}

export default App;

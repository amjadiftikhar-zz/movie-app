import React, {useState, useEffect} from 'react';
import "./movie.styles.css";
import Movie from "./Movie";

function MovieCatalogue() {
    const [movies, setMovies] = useState([]);
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        const movieUrl = 'https://swapi.dev/api/films';
        const peopleUrl = ' https://swapi.dev/api/people/';
        
        const fetchMovie = async () => {
            await fetch(movieUrl)
                .then(data => data.json())
                .then(movieItem => {
                    setMovies(movieItem.results)
                })
                .catch(error => console.log(error))
                .finally(setLoading(false))
        }

        const fetchCharacters = async (url) => {
            await fetch(url)
                .then(data => data.json())
                .then(peopleItem => {
                    setPeople(people => 
                        [...people.concat(peopleItem.results)])
                    if(peopleItem.next !== null ) {
                        // console.log("next api: ", peopleItem.next)
                        fetchCharacters(peopleItem.next)
                    }
                })
                .catch(error => console.log(error))
                .finally(setLoading(false))
        }
        fetchMovie();
        fetchCharacters(peopleUrl);
    }, [])
    console.log("Movies data = ",movies)
    console.log("People data = ",people)
    return (
        <div className="filmSection">
            { 
                loading ? 
                (
                <p>fetching data....</p> 
                ) : (
                <Movie movies={movies} people={people}/> 
                )
            }
        </div>
    )
}

export default MovieCatalogue;

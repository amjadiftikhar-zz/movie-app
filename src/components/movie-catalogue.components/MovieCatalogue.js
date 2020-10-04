import React, {useState, useEffect} from 'react';
import Movie from "./Movie";

function MovieCatalogue() {
    const [movies, setMovies] = useState([]);
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        const movieUrl = 'https://swapi.dev/api/films';
        // const peopleUrl = ' https://swapi.dev/api/people/';
        const people_apis = [
            "http://swapi.dev/api/people/?page=1",
            "http://swapi.dev/api/people/?page=2",
            "http://swapi.dev/api/people/?page=3",
            "http://swapi.dev/api/people/?page=4",
            "http://swapi.dev/api/people/?page=5",
            "http://swapi.dev/api/people/?page=6",
            "http://swapi.dev/api/people/?page=7",
            "http://swapi.dev/api/people/?page=8",
            "http://swapi.dev/api/people/?page=9"
        ];
        
        const fetchMovie = async () => {
            await fetch(movieUrl)
                .then(data => data.json())
                .then(movieItem => {
                    setMovies(movieItem.results)
                })
                .catch(error => console.log(error))
                .finally(setLoading(false))
        }

        const fetchPeople = async () => {
            await people_apis.map(p => {
                fetch(p)
                    .then(data => data.json())
                    .then(peopleItem => {
                        setPeople(people => [...people.concat(peopleItem.results)])
                    })
                    .catch(error => console.log(error))
                    .finally(setLoading(false))
                })
    }
        fetchMovie();
        fetchPeople();
    }, [])
    console.log(movies)
    console.log(people)
    return (
        <div>
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

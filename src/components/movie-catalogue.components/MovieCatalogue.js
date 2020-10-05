import React, {useState, useEffect} from 'react';
import Movie from "./Movie";

// const fetchCharacters = async (peopleApi) => {
//     // const fetchPeople = async () => {
//         await people_apis.map(p => {
//             fetch(p)
//                 .then(data => data.json())
//                 .then(peopleItem => {
//                     setPeople(people => [...people.concat(peopleItem.results)])
//                 })
//                 .then(data => {
//                     if(data.next !== null ) {
//                         fetchCharacters(data.next)
//                     }
//                     }
//                 )
//                 .catch(error => console.log(error))
//                 .finally(setLoading(false))
//             })
//     // }
// }

function MovieCatalogue() {
    const [movies, setMovies] = useState([]);
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        const movieUrl = 'https://swapi.dev/api/films';
        const peopleUrl = ' https://swapi.dev/api/people/';
        // const people_apis = [
        //     "http://swapi.dev/api/people/?page=1",
        //     "http://swapi.dev/api/people/?page=2",
        //     "http://swapi.dev/api/people/?page=3",
        //     "http://swapi.dev/api/people/?page=4",
        //     "http://swapi.dev/api/people/?page=5",
        //     "http://swapi.dev/api/people/?page=6",
        //     "http://swapi.dev/api/people/?page=7",
        //     "http://swapi.dev/api/people/?page=8",
        //     "http://swapi.dev/api/people/?page=9"
        // ];
        
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
            // const fetchPeople = async () => {
                 
                 await fetch(url)
                        .then(data => data.json())
                        .then(peopleItem => {
                            setPeople(people => 
                                [...people.concat(peopleItem.results)])
                            if(peopleItem.next !== null ) {
                                console.log("next api: ", peopleItem.next)
                                fetchCharacters(peopleItem.next)
                            }
                        })
                        // .then(peopleItem => {
                        //     console.log("people Item: ", peopleItem)
                        //     if(peopleItem.next !== null ) {
                        //         console.log("next api: ", peopleItem.next)
                        //         fetchCharacters(peopleItem.next)
                        //     }
                        //     }
                        // )
                        .catch(error => console.log(error))
                        .finally(setLoading(false))
                   
            // }
        }

        // const fetchPeople = async () => {
        //     await people_apis.map(p => {
        //         fetch(p)
        //             .then(data => data.json())
        //             .then(peopleItem => {
        //                 setPeople(people => [...people.concat(peopleItem.results)])
        //             })
        //             .catch(error => console.log(error))
        //             .finally(setLoading(false))
        //         })
        // }
        fetchMovie();
        fetchCharacters(peopleUrl);
        // fetchPeople();
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

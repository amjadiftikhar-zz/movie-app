import React, {useState, useEffect } from 'react';

function Movie({movies, people}) {

    return (
        <>
        { movies.map((movie, index) => {
                return ( 
                    <div key={index}>
                        <h2>{movie.title}</h2>
                        <li>{movie.director}</li>
                        <li>{movie.created}</li>
                        <li>{movie.episode_id}</li>
                        <li>{movie.opening_crawl}</li>
                        {(
                            people.map((p, i) => {
                                return(
                                    p.films.map(element => {                                 
                                        if(movie.url === element) {
                                        return ( <li key={i}> {p.name} </li> ) 
                                        } 
                                    })                            
                                )
                            }))
                        }
                    </div>
                )
            })
        }
        </>
    )
}

export default Movie; 

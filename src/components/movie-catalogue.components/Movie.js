import React, {useState, useEffect } from 'react';
import "./movie.styles.css";

const DisplayCharacter = ({p}) => {
    const [showCharacters, setShowCharacters] = useState(false)
    const onClick = (e) => {
        e.preventDefault();
        showCharacters ? setShowCharacters(false) : setShowCharacters(true)
    }
    return (
      <div>
        <a href="" onClick={onClick}> 
           {p.name} 
        </a>
        { showCharacters ? <Results p={p} /> : null }
      </div>
    )
  }
  
  const Results = ({p}) => (
    console.log("person characters: ",p),
      <div className="movie-character">
                <h4>{p.name}</h4>
                <div className="specs">
                    <div className="element">
                        Name: {p.name}
                    </div>
                    <div className="element">
                        Height: {p.height}
                    </div>
                    <div className="element">
                        Gender: {p.gender}
                    </div>
                    <div className="element">
                        Mass: {p.mass}
                    </div>
                    <div className="element">
                        Birth: {p.birth_year}
                    </div>
                    <div className="element">
                        Eye Color:{p.eye_color}
                    </div>
                    <div className="element">
                        Hair Color{p.hair_color}
                    </div>
                </div>
            </div> 
   
  )

function Movie({movies, people}) {
    
    return (
        <>
        { movies.map((movie, index) => {
                return ( 
                    <div className="section" key={index}>
                        <h2>{movie.title}</h2>
                        <div> <strong>Director:</strong>{movie.director}</div>
                        <div> <strong>Created:</strong> {movie.created}</div>
                        <div><strong>Episode:</strong>{movie.episode_id}</div>
                        <div><strong>Description:</strong> 
                            <p>{movie.opening_crawl}</p>
                        </div>
                        {(
                        people.map((p, i) => {
                            return(                                   
                                p.films.map(element => {                                 
                                    if(movie.url === element) {
                                    return ( 
                                    <div key={i}> 
                                        <DisplayCharacter p={p}/>
                                    </div> ) 
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

// const People = ({people}) => {

//     return (
//         <>
//         { 
//         people.map(spec => {
//                    console.log(spec.name)
//             })
//         }
//         </>
//     )
// }
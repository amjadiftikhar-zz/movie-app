import React, {useState} from 'react';
import {CardDeck, Card} from 'reactstrap';
import People from "./People";
import "./movie.styles.css";
import moment from 'moment';

function Movie({movies, people}) {
    const [characters, setCharacters] = useState(false)
    const [isToggled, setToggled] = useState(false);

    const toggleTrueFalse = () => setToggled(!isToggled);

    const onClick = (e) => {
        e.preventDefault();
        characters ? setCharacters(false) : setCharacters(true)
    }

    return (
        <>
        { movies.map((movie, index) => {
            return ( 
                    <Card className="card" key={index} style={{
                        width:"30rem", marginBottom:"2rem", 
                        borderRadius:"2rem", backgroundColor:"#e0c56e", 
                        borderColor:"red", padding:"1.5rem"
                        }}>
                        <div key={index} className="movieSection"  >
                            <h2>{movie.title}</h2>                            
                            <div><p>{movie.opening_crawl}</p>
                            </div>
                            <div> <strong className="label">Director:</strong>
                                {movie.director}</div>
                            <div> <strong className="label">Released:</strong> 
                                {moment(movie.created).format('LLLL')}</div>
                            <div><strong className="label">Episode:</strong>
                                {movie.episode_id}</div>
                            <div onClick={toggleTrueFalse} key={index} 
                                className="displayCharacters">
                                <a key={index} href="" className="characterBtn"
                                    onClick={onClick}> 
                                    {isToggled ? "Hide Characters" 
                                        : "Movie Characters" 
                                    } 
                                </a>
                                {
                                characters ? 
                                    <People people={people} movie={movie}/> : null
                                }
                            </div>  
                        </div> 
                    </Card> 
            )
            })
        }
        </>
    )
}

export default Movie; 
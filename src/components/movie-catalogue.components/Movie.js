import React, {useState} from 'react';
import {Card} from 'reactstrap';
import People from "./People";
import "./movie.styles.css";
import moment from 'moment';

function Movie({movie, people}) {
    const [showCharacters, setShowCharacters] = useState(false)
    const [isToggled, setToggled] = useState(false);

    const toggleTrueFalse = () => setToggled(!isToggled);

    const onClick = (e) => {
        e.preventDefault();
        showCharacters ? setShowCharacters(false) : setShowCharacters(true)
    }

    return (
        <>
        { 
        <Card className="card" style={{
            width:"30rem", marginBottom:"2rem", 
            borderRadius:"2rem", backgroundColor:"#e0c56e", 
            borderColor:"red", padding:"1.5rem"
            }}>
            <div className="movieSection"  >
                <h2 className="movieTitle">{movie.title}</h2>                            
                <div><p>{movie.opening_crawl}</p>
                </div>
                <div> <strong className="label">Director:</strong>
                    {movie.director}</div>
                <div> <strong className="label">Released:</strong> 
                    {moment(movie.created).format('LLLL')}</div>
                <div><strong className="label">Episode:</strong>
                    {movie.episode_id}</div>
                <div onClick={toggleTrueFalse} 
                    className="displayCharacters">
                    <a href="" 
                        className="characterBtn"
                        onClick={onClick}
                        > 
                        {isToggled ? "Hide Characters" 
                            : "Movie Characters" 
                        } 
                    </a>
                    {
                    showCharacters ? 
                        <People people={people} movie={movie}/> : null
                    }
                </div>  
            </div> 
        </Card> 
        }
        </>
    )
}

export default Movie; 
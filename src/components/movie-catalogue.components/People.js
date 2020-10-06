import React from 'react';
import DisplayCharacters from "./DisplayCharacters";

function People({people, movie}) {
    return (
        <div className="peopleList">
           { people.map((p, i) => {
                    return(                                   
                        p.films.map(element => {                                 
                            if(movie.url === element) {
                            return (  
                            <div key={i}> 
                                <DisplayCharacters p={p}/>
                            </div>                             
                            ) 
                            } 
                        }) 
                    )
                })
            }
        </div>
    )
}

export default People;

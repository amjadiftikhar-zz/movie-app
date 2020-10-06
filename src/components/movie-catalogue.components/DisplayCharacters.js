import React, {Component, useState} from 'react';
import CharacterSpecs from "./CharacterSpecs";

const DisplayCharacters = ({p}) => {
    const [showCharacters, setShowCharacters] = useState(false)
    const onClick = (e) => {
        e.preventDefault();
        showCharacters ? setShowCharacters(false) : setShowCharacters(true)
    }
    return (  
      /** returns CharacterSpecs Component containing specs  */ 
      <div className="characterElement">       
        <a href="" onClick={onClick}> 
        <h3 className="characterName">{p.name}</h3>
          { showCharacters ? <CharacterSpecs p={p} /> : null }
        </a>
      </div>
    )
}
 
export default DisplayCharacters;
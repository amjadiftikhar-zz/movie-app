import React, {useState} from 'react';
import CharacterSpecs from "./CharacterSpecs";

const DisplayCharacters = ({p}) => {
    const [showCharacters, setShowCharacters] = useState(false)
    const onClick = (e) => {
        e.preventDefault();
        showCharacters ? setShowCharacters(false) : setShowCharacters(true)
    }
    return (      
      <div className="characterElement">       
        <a href="" onClick={onClick}> 
        <h3>{p.name}</h3>
          { showCharacters ? <CharacterSpecs p={p} /> : null }
        </a>
      </div>
    )
}
 
export default DisplayCharacters;
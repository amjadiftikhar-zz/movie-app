import React from 'react';
 
const CharacterSpecs = ({p}) => {
    return (
      <div className="characterSpecs">
                <div className="specs">
                    <div className="element"><strong className="label">
                        Height: </strong>{p.height}</div>
                    <div className="element"><strong className="label">
                        Gender: </strong>{p.gender}</div>
                    <div className="element"><strong className="label">
                        Mass: </strong>{p.mass}</div>
                    <div className="element"><strong className="label">
                        Birth: </strong>{p.birth_year}</div>
                    <div className="element"><strong className="label">
                        Color:</strong>{p.eye_color}</div>
                    <div className="element"><strong className="label">
                        Hair Color:</strong>{p.hair_color}</div>
                </div>
        </div> 
    )
}

export default CharacterSpecs;
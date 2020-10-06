import React from 'react';
 
const CharacterSpecs = ({p}) => {
    return (
        /** Characters' specification section */
      <div className="characterSpecs">
                {/* List of Characters' specification */}
                <div className="specs">
                    <div className="element"><strong className="specLabel">
                        Height: {p.height}</strong></div>
                    <div className="element"><strong className="specLabel">
                        Gender: {p.gender}</strong></div>
                    <div className="element"><strong className="specLabel">
                        Mass: {p.mass}</strong></div>
                    <div className="element"><strong className="specLabel">
                        Birth: {p.birth_year}</strong></div>
                    <div className="element"><strong className="specLabel">
                        Color:{p.eye_color}</strong></div>
                    <div className="element"><strong className="specLabel">
                        Hair Color:{p.hair_color}</strong></div>
                </div>
        </div> 
    )
}

export default CharacterSpecs;
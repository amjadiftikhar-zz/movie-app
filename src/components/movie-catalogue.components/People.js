import React from 'react';

function People({people}) {
    return (
        <div>
            {people.map((p, index) => {
                return (<li key={index}> {p.name} </li>)
            })}
        </div>
    )
}

export default People

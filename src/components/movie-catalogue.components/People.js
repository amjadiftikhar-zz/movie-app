import React from 'react';

function People({people}) {
    return (
        <div>
            {people.map((p, index) => {
                return ( <a href=""> <li key={index}>{p.name} </li> </a>)
            })}
        </div>
    )
}

export default People

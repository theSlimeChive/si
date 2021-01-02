import React from 'react'

const Sources = ({ match }) => {
    let params = match.params;
    return (
        <h2>{params.name}</h2>
    )
}

module.exports = Sources;
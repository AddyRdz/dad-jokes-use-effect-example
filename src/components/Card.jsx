import React from 'react'

const Card = (props) => { 
    const {joke} = props.joke
    return (<div className="card">{joke}</div>)
}

export default Card
import React from 'react'

const toy = (props) => (
    <div className="Toy">
        <span>{props.model ? props.model : "Nu exista"}</span>
        <span>{props.color ? props.color : "Nu exista"}</span>
        <span>{props.price ? props.price : "Nu exista"}</span>
    </div>
)

export default toy;
import React from 'react'


const car = (props) => (
    <div className="Car">
        <span>{props.brandName ? props.brandName : "Nu exista"}</span>
        <span>{props.model ? props.model : "Nu exista"}</span>
        <span>{props.color ? props.color : "Nu exista"}</span>
        <span>{props.price ? props.price : "Nu exista"}</span>
    </div>
)

export default car;
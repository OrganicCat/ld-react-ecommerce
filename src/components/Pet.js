import React from 'react'

const Pet = (props) => {

    return (
        <div>
            <p>{props.description}</p>
            <img src={props.icon} />
        </div>
    )
}

export { Pet }
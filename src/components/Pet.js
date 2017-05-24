import React from 'react'
import { partial } from '../utils/utils'

const Pet = (props) => {
    const handleAdd = partial(props.handleAdd, props)

    return (
        <div>
            <p>{props.description}</p>
            <img src={props.icon} alt="" />
            <button onClick={handleAdd}>Add to Cart</button>
        </div>
    )
}

export { Pet }
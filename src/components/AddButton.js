import React from 'react';

export const AddButton = (props) => {
    const handleClick = props.add.bind(this, 0, 0)

    return (
        <button className="add-button" onClick={handleClick}>Add Numbers</button>
    )
}
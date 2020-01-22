import React from 'react';

function NoteInput(props) {
    const handleChange = (event) => {
        props.noteChanged(event.target.value);
    }
    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            props.addNote();
        }
    }
    return (
        <input
            type="text"
            name="note"
            value={props.value}
            onChange={handleChange}
            onKeyDown={handleKeyDown} />
    );
}

export default NoteInput;

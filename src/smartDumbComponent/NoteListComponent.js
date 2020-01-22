import React from 'react';

function NoteList(props) {
    const notes = props.notes.map((note) =>
            <li>{note}</li>
        );

    return (
        <div>
            Notes<br/>
            <ul>
            {notes}
            </ul>
        </div>
    );
}

export default NoteList;

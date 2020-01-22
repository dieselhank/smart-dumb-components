import React from 'react';
import NoteInput from './NoteInputComponent';
import NoteList from './NoteListComponent';

class NotesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            value: '',
        };
    }

    handleNoteChange = (value) => {
        this.setState({value});
    }

    handleAddNote = () => {
        this.setState((state) => {
            state.notes.push(state.value);
            return {notes: state.notes, value: ''};
        });
    }

    render() {
        return (
            <div>
                <h1>Smart/Dumb Component Note List</h1>
                <div>
                    <NoteList notes={this.state.notes}/>
                    <NoteInput value={this.state.value} noteChanged={this.handleNoteChange} addNote={this.handleAddNote}/>
                </div>
            </div>
        );
    }
}

export default NotesPage;

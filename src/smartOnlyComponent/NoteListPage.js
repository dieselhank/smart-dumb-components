import React from 'react';

class NoteListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            value: '',
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            this.setState((state) => {
                state.notes.push(state.value);
                return {notes: state.notes, value: ''};
            });
        }
    }

    render() {
        const notes = this.state.notes.map((note) =>
            <li>{note}</li>
        );
        return (
            <div>
                <h1>Smart Component Note List</h1>
                <div>
                    Notes<br />
                    <ul>
                    {notes}
                    </ul>
                    <input
                        type="text"
                        name="note"
                        value={this.state.value}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown} />
                </div>
            </div>
        );
    }
}

export default NoteListPage;

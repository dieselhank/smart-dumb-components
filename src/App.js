import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import NoteListPage from './smartOnlyComponent/NoteListPage';
import NotesPage from './smartDumbComponent/NotesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link className="App-link" to="/">Home</Link></li>
              <li><Link className="App-link" to="/smart">Note list with only Smart Component</Link></li>
              <li><Link className="App-link" to="/dumb">Note list with Smart and Dumb Component</Link></li>
            </ul>
          </nav>
          <Switch>
          <Route path="/smart"><NoteListPage/></Route>
          <Route path="/dumb"><NotesPage/></Route>
          <Route path="/">
            <h1>Select one of the links above</h1>
          </Route>
        </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

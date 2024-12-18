import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Home from './components/Home';
import NoteParent from "./components/NoteParent";
import About from './components/About';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
          </ul>
        </nav>

       
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<NoteParent />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

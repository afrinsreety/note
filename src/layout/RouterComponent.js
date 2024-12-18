import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About';
import Home from '../components/Home';
import NoteParent from '../components/NoteParent';

export default function RouterComponent() {
  return (
    <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<NoteParent />} />
          <Route path="/" element={<Home />} />
        </Routes>
  )
}

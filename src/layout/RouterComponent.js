
import { Route, Routes } from 'react-router-dom'
import About from '../components/About';
import Home from '../components/Home';
import NoteParent from '../components/NoteParent';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

export default function RouterComponent() {

 

  return (
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<NoteParent />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
  )
  
}

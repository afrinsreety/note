import { Link } from 'react-router-dom'

export default function Header() {
  return (
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
  )
}

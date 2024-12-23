import { Link } from 'react-router-dom';
function checkAuth() {
  const idToken = document.cookie.split('; ').find(row => row.startsWith('idToken='));
  return idToken ? true : false;
}

function onLogout() {
  document.cookie = 'idToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  window.location.href = '/';
}

export default function Header() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
        </li>
        <li>
          <Link to="/notes" className="text-white hover:text-gray-400">Notes</Link>
        </li>
        {
          checkAuth() ? <li>
            <button onClick={onLogout} className="text-white hover:text-gray-400">Logout</button>
          </li> :
            <>
              <li>
                <Link to="/register" className="text-white hover:text-gray-400">Register</Link>
              </li>
              <li>
                <Link to="/login" className="text-white hover:text-gray-400">Login</Link>
              </li>
            </>
        }

      </ul>
    </nav>
  )
}

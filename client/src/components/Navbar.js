import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {
  const logout = () => {
    localStorage.removeItem("token")
    setUser({})
  };

  return (
    <div className="nav justify-content-end">
    <ul className="nav flex-row">
      {user ? 
        <>
          <li className="nav-item" style={{ color: "black" }}>Welcome {user}!</li>
          <li className="nav-item">
            <Link to="/home" style={{ textDecoration: 'none' }}>home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" style={{ textDecoration: 'none' }}>about</Link>
          </li>
          
          <li onClick={logout}>
            <Link to="/login" style={{ textDecoration: 'none' }}>logout</Link>
          </li>
        </>
       : 
        <>
          <li className="nav-item">
            <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
          </li>
          <br /> 
          <li className="nav-item">
            <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
          </li>
        </>
      }
    </ul>
    </div>
  );
}

export default Navbar;
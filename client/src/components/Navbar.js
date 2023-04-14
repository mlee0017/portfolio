import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {
  const logout = () => {
    localStorage.removeItem("token")
    setUser({})
  };

  return (
    <div className="nav justify-content-end">
    <ul className="user-auth">
      {user ? 
        <>
          <li style={{ color: "black" }}>Welcome {user}!</li>
          <li className="home-nav">
            <Link to="/home" style={{ textDecoration: 'none' }}>home</Link>
          </li>
          <li className="about-nav">
            <Link to="/about" style={{ textDecoration: 'none' }}>about</Link>
          </li>
          
          <li onClick={logout}>
            <Link to="/login" style={{ textDecoration: 'none' }}>logout</Link>
          </li>
        </>
       : 
        <>
          <li className="nav">
            <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
          </li>
          <li>
            <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
          </li>
        </>
      }
    </ul>
    </div>
  );
}

export default Navbar;
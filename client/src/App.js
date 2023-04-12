import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { userInfo } from './services/userService';
import './index.css';
import EditComment from './pages/comments/Edit';
import IndexComment from './pages/comments/Index';
import NewComment from './pages/comments/New';
import ShowComment from './pages/comments/Show';
import Register from './pages/users/Register';
import Login from './pages/users/Login';
import Navbar from './components/Navbar';


function App() {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
      let token = localStorage.getItem("token")
      if (token) {
          getLoggedInUser()
      } else {
          setIsLoading(false)
      }
      async function getLoggedInUser() {
          const user = await userInfo()
          setUser(user)
          setIsLoading(false)
      }

  }, [])
  let loggedIn = user.username
  return (
    <div className="App">
      <Navbar user={loggedIn} setUser={setUser}></Navbar>
      <Routes>
          <Route path='/comment' element={<IndexComment user={loggedIn} />} />
          <Route path='/comment/:id' element={<ShowComment user={loggedIn} />} />
          {loggedIn ?
            <>
              <Route path='/comment/new' element={<NewComment user={loggedIn} />} />
              <Route path='/comment/:id/edit' element={<EditComment />} />
              {!isLoading && <Route path='*' element={<Navigate to='/comment' />} />}
            </>
            :
            <>
              <Route path='/register' element={<Register setUser={setUser} />} />
              <Route path='/login' element={<Login setUser={setUser} />} />
              {!isLoading && <Route path='*' element={<Navigate to='/login' />} />}
            </>
          }
      </Routes>
    </div>
  );
}

export default App;

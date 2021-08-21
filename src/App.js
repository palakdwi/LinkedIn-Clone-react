import './App.css';
import {useEffect} from 'react'
import Feed from './Components/Feed';
import { useDispatch, useSelector } from 'react-redux'
import {selectUser, login, logout} from './features/counter/userSlice'
import Sidebar from './Components/Sidebar';
import Header from './Header'
import Login from './Components/Login'
import { auth } from './firebase';
import Widgets from './Components/Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
      auth.onAuthStateChanged(userAuth => {
        if(userAuth)
        {
          /*user is logged in */
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          }))
        }
        else{
          /*user is logged out */
          dispatch(logout())
        }
      })
  })

  return (
    <div className="App">
        <Header/>

        { !user ? (<Login/>) : (
            <div className="app-body">
              <Sidebar/>
              <Feed/>
              <Widgets/>
            </div>
            )
        }
    </div>
  );
}

export default App;

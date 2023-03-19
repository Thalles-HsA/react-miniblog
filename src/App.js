import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';


import { AuthProvider } from './contexts/AuthContext';

import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import Dashboard from './pages/Dashbord';

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>
  }


  return (
    <div className="App">
      <AuthProvider value={{ user }} >
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/> }/>
              <Route path='/register' element={!user ? <Register/> : <Navigate to='/'/> } />
              <Route path='/posts/create' element={user ? <CreatePost/> : <Navigate to='/login'/> } />
              <Route path='/dashbord' element={user ? <Dashboard/> : <Navigate to='/login'/> } />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

// import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import { AuthContextProvider } from './auth/authContext';
import Logout from './pages/logout/logout';
import Hero from './pages/hero/hero';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <main id="App">
          <Routes>
            <Route path={Login.Route} element={<Login.Page/>}/>
            <Route path={Register.Route} element={<Register.Page/>}/>
            <Route path={Logout.Route} element={<Logout.Page/>}/>
            <Route path={Hero.Route} element={<Hero.Page/>}/>

            {/* <Route path='*' element={<Home/>}/> // 404 page not found  */}
          </Routes>
        </main>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
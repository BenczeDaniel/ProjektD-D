
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Routes,Route} from 'react-router-dom'
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {MyNavbar} from './components/MyNavbar';
import {Register} from './components/Register';
import {Login} from './components/Login';
import {QueryClient,QueryClientProvider} from 'react-query';
import {UserProfile} from './components/UserProfile'; 
import {DDGYM} from './components/DDGYM';
import { useState } from 'react';    



const queryClient = new QueryClient()


function App() {
  const [loggedInUser, setLoggedInUser] =useState({})
  console.log('LoggedInUser:',loggedInUser)   



  return (
      <QueryClientProvider client={queryClient}>
        <MyNavbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}  />  
      <div className="holder d-flex justify-content-center">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
      {loggedInUser?.username && 
      <Route path="/profiles" element={<UserProfile  loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}   />}/>}
      {loggedInUser?.role=='admin' &&
       <Route path="d&dgym" element={<DDGYM/>}/>}                                                                                

    </Routes>
    </div>
    </QueryClientProvider>
   
  );
}

export default App;


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
import { useState } from 'react';    
import { Prices } from './components/Prices';
import { Training } from './components/Training';
import { Admin } from './components/Admin';



const queryClient = new QueryClient()


function App() {
  const [loggedInUser, setLoggedInUser] =useState({})
  console.log('LoggedInUser:',loggedInUser)   



  return (
      <QueryClientProvider client={queryClient}>
        <MyNavbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}  />  
      <div className="holder d-flex justify-content-center minuszholder">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/training" element={<Training />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
      {loggedInUser?.username && 
      <Route path="/profiles" element={<UserProfile  loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}   />}/>}
      {loggedInUser?.role && loggedInUser.role == 'admin' &&
       <Route path="/admin" element={<Admin/>}/>}                                                                                

    </Routes>
    </div>
    </QueryClientProvider>
   
  );
}

export default App;

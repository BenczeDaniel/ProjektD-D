
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




const queryClient = new QueryClient()


function App() {



  return (
      <QueryClientProvider client={queryClient}>
      <MyNavbar />
      <div className="holder d-flex justify-content-center">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

    </Routes>
    </div>
    </QueryClientProvider>
   
  );
}

export default App;

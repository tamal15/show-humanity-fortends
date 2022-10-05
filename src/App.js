
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Register from './Pages/HomePage/LoginPage/Register/Register';
import Login from './Pages/HomePage/LoginPage/Login/Login';
import AuthProvider from './Pages/context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Welcome from './Pages/Dashboard/Welcome/Welcome';
import MakeAdmin from './Pages/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin';
import PothoShisuUpload from './Pages/Dashboard/AdminDashboard/PothoShisuUpload/PothoShisuUpload';
import ProductDetails from './Pages/HomePage/Home/ProductDetails/ProductDetails';
import VerifyData from './Pages/Dashboard/AdminDashboard/VerifyData/VerifyData';
import AdminVerify from './Pages/Dashboard/AdminDashboard/AdminVerify/AdminVerify';
import StreetChild from './Pages/HomePage/Home/StreetChild/StreetChild';
import OldPeople from './Pages/HomePage/Home/OldPeople/OldPeople';
import Contact from './Pages/HomePage/Home/Contact/Contact';
import About from './Pages/HomePage/Home/About/About';
import Health from './Pages/HomePage/Home/WorkHeader/Health';
import Services from './Pages/HomePage/Home/Services/Services';
import MyOrder from './Pages/Dashboard/UserDashboard/MyOrder';
function App() {
  return (
    <div className="App">
      <AuthProvider>

      <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/bookDetails/:id" element={<ProductDetails />}/>
     <Route path="/shishu" element={<StreetChild />}/>
     <Route path="/old" element={<OldPeople />}/>
     <Route path="/contact" element={<Contact />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/health" element={<Health />}/>
     <Route path="/service" element={<Services />}/>
     
     
     



     <Route path="/dashboard" element={<Dashboard/>}>
     <Route path="/dashboard" element={<Welcome/>} />
              <Route path="/dashboard/welcome" element={<Welcome/>} />
              <Route path="/dashboard/potho" element={<PothoShisuUpload />} />
              <Route path="/dashboard/makeadmin" element={<MakeAdmin />} />
              <Route path="/dashboard/verifydata" element={<VerifyData />} />
              <Route path="/dashboard/adminverifydata" element={<AdminVerify />} />
              <Route path="/dashboard/myorder" element={<MyOrder />}/>
     </Route>
              
     </Routes>
     </BrowserRouter>

      </AuthProvider>
    
    </div>
  );
}

export default App;

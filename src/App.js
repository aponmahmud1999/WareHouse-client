import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import NotFound from './components/Notfound/Notfound';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ManageServices from './components/ManageServices/ManageServices';
import AddService from './components/AddService/AddService';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import Blog from './components/Blog/Blog';
import MyItems from './components/MyItems/MyItems';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path="/manageservice" element={
          <RequireAuth>
            <ManageServices></ManageServices>
          </RequireAuth>
        }>
        </Route>
        <Route path="/addservice" element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path='update/:id' element={<RequireAuth>
          <UpdateProduct></UpdateProduct>
        </RequireAuth>} />
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myitems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import About from "./About/About";
import Login from "./Login/Login";
import Blogs from "./Blogs/Blogs";
import Dashboard from "./Dashboard/Dashboard";
import Help from "./Help/Help";
import Reviews from "./Reviews/Reviews";
import NotFound from './NotFound';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">

      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='/help' element={<Help></Help>} ></Route>
        <Route path='/reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

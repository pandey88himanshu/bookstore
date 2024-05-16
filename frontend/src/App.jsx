
import './App.css'
import CardDetails from './components/CardDetails';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import UpdateBook from './components/UpdateBook';
import AddBooks from './pages/AddBooks';
import Books from './pages/Books';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {

  return (
    <Router>
     <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/books' element={<Books/>}/>
      <Route  path='/addBooks' element={<AddBooks/>}/>
      <Route  path='/bookDetails' element={<CardDetails/>}/>
      <Route  path='/updateBook' element={<UpdateBook/>}/>
      </Routes>
      <Footer/>
    </Router>
  
  )
}

export default App

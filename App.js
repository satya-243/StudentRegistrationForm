//All component Imports

import './App.css';
import Test from "./component/Test";
import Navbar from "./component/Navbar";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import Home from './component/Home';
import TestForm from './component/TestForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ButtonClick from './component/ButtonClick';
import Fetch from './component/Fetch';
import StudentForm from './component/StudentRegistrationForm';
import StudentRegistrationForm from './component/StudentRegistrationForm';

//Main rendering function

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Test />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contactUs' element={<ContactUs />}></Route>
          <Route path='/testFormwithformik' element={<TestForm />}></Route>
          <Route path='/buttonclick' element={<ButtonClick />}></Route>
          <Route path='/userTable' element={<StudentRegistrationForm />}></Route>
          <Route path='/consolefetch' element={<Fetch />}></Route>


        </Routes>
      </Router>
    </>
  );
}

export default App;
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Title from './Components/Title';

function App() {
  const [alert, setAlert] = useState(null);
 const showAlert = (message,type) =>{
     setAlert({
      message : message,
      type : type
     })
     setTimeout(() => {
      setAlert(null)
     }, 1900);
 }
  const [theme, setTheme] = useState("light");

  const togglemode = () =>{
    if(theme==="light"){
      setTheme("dark")
      document.body.style.backgroundColor = '#040316 ';
      showAlert("Dark Mode has been enabled","success")
      document.title ="TextUtils-Dark Mode";
    }
    else{
      setTheme("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success")
      document.title = "TextUtils-light Mode";
    }
  }
  return (
    <>
        <Navbar title="TextUtils" Home = "Home " About="About us" theme={theme} togglemode ={togglemode} />
        <Alert alert={alert}/>
          <div className="container my-3">
          <Router>
            <Routes>
              <Route exact path="/" element={<Title/> } />
            </Routes>
          </Router>
          <Router>
            <Routes>
              <Route exact path="/About" element={<About /> } />
            </Routes>
          </Router>
          <Router>
            <Routes>
              <Route exact path="/home" element={<TextForm heading="Enter the Text here to analyze Below" theme={theme} showAlert={showAlert}/> } />
            </Routes>
          </Router>
          </div>
    </>
  );
}

export default App;

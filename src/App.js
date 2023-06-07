import logo from './logo.svg';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';


import './App.css';



function App() {
  const [mode, changemode] = useState('light');
  const [alert, newalert] = useState(null);
  const [bodycol, newcol] = useState('white');

  const updatecol = (col) => {
    newcol(col);
    document.body.style.backgroundColor = bodycol;
  }

  const updatealert = (message, color) => {
    newalert({
      msg: message,
      col: color
    })

    setTimeout(() => {
      newalert(null)
    }, 1500);
  }
  const cgmode = () => {
    if (mode === 'light') {
      changemode('dark');
      // updatecol('white');
      document.body.style.backgroundColor = '#04200c';
      updatealert("Dark mode enabled", "warning");
    }
    else {
      changemode('light');
      document.body.style.backgroundColor = 'white';
      updatealert("Light mode enabled", "success");
      // updatecol('white');

    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title={"hello"} mode={mode} cgmode={cgmode}  ></Navbar>

        <Alert alert={alert}></Alert>

        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Form mode={mode} updatealert={updatealert} />} />
          </Routes>



        </div>

      </BrowserRouter>




    </>
  );
}

export default App;

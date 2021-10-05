import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/Topbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts'


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#18191A'
      showAlert("Dark mode has been enabled", 'success')

      setInterval(() => {
        document.title = "TextEditor - Dark Mode"
      }, 1500)
      setInterval(() => {
        document.title = "TextEditor is Awesome"
      }, 2500)

    } else {
      setMode('light')
      document.body.style.backgroundColor = '#ffffff'
      showAlert("Light mode has been enabled", 'success')
      document.title = "TextEditor - Light Mode"

      setInterval(() => {
        document.title = "TextEditor - Light Mode"
      }, 1500)
      setInterval(() => {
        document.title = "TextEditor is Awesome"
      }, 2500)

    }
  }

  return (
    <div className="app">
      <Topbar mode={mode} toggleMode={toggleMode} />
      <div className="alertoption">
        <Alerts alert={alert} />
      </div>
      <TextForm mode={mode} showAlert={showAlert} heading={'Enter the text to analyze below : '} />
    </div>
  );
}

export default App;

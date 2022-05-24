import { InputForm } from './InputForm';
import Button from '@mui/material/Button'
import React, {useState} from 'react';
import tenta from './tenta.gif';
import './App.css';

function App() {
  const [count,setCount] = useState<number>(0)
  const handleShowAlert = () => {
    alert("Hello ReactJS")
    setCount(count+1)
  }
  return (
    <div className="App">
      <header className="App-header">
      <InputForm defaultValue={'Start typing'}/>
        <img src={tenta} className="App-logo" alt="logo" />
       
        <div>{`Alert was shown: ${count} times`}</div>
        <Button onClick={handleShowAlert}>Show alert</Button>
        <Button variant="contained"><a
            className="App-link"
            href="https://github.com/Hurado/react-app-daftac"
            target="_blank"
            rel="noopener noreferrer"
        >
          Check Github
        </a></Button>
        
      </header>
    </div>
  );
}

export default App;
import { InputForm } from "./InputForm";
import React from "react";
import  { ContactsPage } from './ContactsPage'
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { NewsPage } from "./NewsPage";
import logo from "./images/logodiet.jpg";


export const routesPaths = {
  about: "about",
  form: "form",
  contacts: "contacts",
  news: "news"
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div>
          <img src={logo} className='App-logo' alt="logo-diet" />
        </div>
        <div>
          <Link className="App-link" to={"/"}>Home</Link>
          <Link className="App-link" to={`/${routesPaths.about}`}>About</Link>
          <Link className="App-link" to={'/news'}>News</Link>
          <Link className="App-link" to={`/${routesPaths.form}`}>Form</Link>
          <Link className="App-link" to={`/${routesPaths.contacts}`}>Contact</Link> 
        </div>
      </div>
      <Routes>
        <Route path="/" element={<div>Home</div>}/>
        <Route path='*' element={<div>404</div>}/>
        <Route path='/about' element={<div>About</div>}/>
        <Route path={`/${routesPaths.news}`} element={<NewsPage/>}/>
        <Route path={`/${routesPaths.form}`} element={<InputForm defaultValue={'hello form'}/>}/>
        <Route path={`/${routesPaths.contacts}`} element={<div>Contacts</div>}/>
      </Routes>
    </div>
  );
}

export default App;

import React, { useContext, useEffect } from 'react';
import './App.css';
import { AppContext } from './Context/AppContext';
import { Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Chats from './component/Chats';


function App() {

  const {fetchChats}= useContext(AppContext);

  useEffect(() => {
    fetchChats();
  },[])
  return (<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/chats/:id' element={<Chats/>} />
  </Routes>
  );
}

export default App;

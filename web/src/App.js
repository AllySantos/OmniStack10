import React, { useEffect, useState } from 'react';
import api from './services/api'

import './globa.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem'
import DevForm from './components/DevForm'
function App() {

  const [devs, setDevs] = useState([])


  useEffect(() =>{
    async function loadDevs(){

      const responseIndex = await api.get('/devs')
      setDevs(responseIndex.data)
      
    }

    loadDevs();
  }, [])

  async function handleSubmit(data){
    

    const response = await api.post('/devs', data)


    setDevs([...devs,  response.data])

  }
  return (
    <div id="app">
      <aside>
        <strong className="">Cadastrar</strong>

        <DevForm onSubmit={handleSubmit} />
       
      </aside>

      <main>

        <ul>

        {devs.map(dev => (

          < DevItem key = {dev.id} dev = { dev } />
        )) }
      
         

        </ul>
        

      </main>
    </div>
   
  );
}

export default App;

import React from 'react';

import './globa.css';
import './App.css';
import './Sidebar.css';
function App() {

  return (
    <div id="app">
      <aside>
        <strong className="">Cadastrar</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub </label>
            <input name="github_username" id="github_username" required></input>
          </div>
         
          <div className="input-block">
            <label htmlFor="techs">Tecnologias Utilizadas </label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude </label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude </label>
              <input name="longitude" id="longitude" required></input>
            </div>

          </div>

          <button type="submit">Salvar</button>
        
        </form>
      </aside>

      <main>

        <ul>
          <li className="dev-item">

            <header>
              <img src="data:image/jpeg;base64,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" alt="" />

            </header>

          </li>
        </ul>
      </main>
    </div>
   
  );
}

export default App;

import './App.css';
import React from 'react';
import Adicionar from './components/adicionar';
import ClassificadoComponent from './components/classificados';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modaladicionar" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modaladicionar">Adicionar Classificado</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <Adicionar></Adicionar>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-light text-dark">
          <div className="card-header">
            <p>
              Classificados
            </p>
          </div>
          <div className="card-body">
            <ClassificadoComponent></ClassificadoComponent>
          </div>
          <div className="card-footer">
            <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modal">
              Adicionar classificado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

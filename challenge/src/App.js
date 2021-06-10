import './App.css';
import React from 'react';
import Adicionar from './components/adicionar';
import ClassificadoComponent from './components/classificados';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modaladicionar" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modaladicionar">Adicionar classificado</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <Adicionar></Adicionar>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
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

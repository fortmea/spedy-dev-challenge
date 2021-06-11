import './App.css';
import React from 'react';
import Adicionar from './components/adicionar';
import ClassificadoComponent from './components/classificados';
import ContagemComponent from './components/contagem'
function App() {
  return (
    <div className="App">
      <div className="app">
        <div className="modal fade text-dark" id="modal" tabIndex="-1" aria-labelledby="modaladicionar" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modaladicionar">Adicionar classificado</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <Adicionar></Adicionar>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div className="p-2 bd-highlight">
            <h1>
              Classificados
            </h1>
          </div>
          <div className="p-2 bd-highlight" >
            <button className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#modal">
              <i className="fa fa-plus-circle" aria-hidden="true"></i> Adicionar classificado
            </button>
          </div>
        </div>
        <div class="row row-cols-2">
          <ClassificadoComponent></ClassificadoComponent>
          </div>
        <div className="col-12">
          <div className="d-flex text-center offset-lg-1 mb-3">
            <ContagemComponent></ContagemComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

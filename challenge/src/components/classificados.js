import React from 'react';

export default class ClassificadoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: []
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('http://localhost:3001/listar', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ response: data['data'] }));
        
    }
    render() {
        if (Object.keys(this.state.response).length === 0) {
         return(
            <div className="alert alert-warning" role="alert">
            Nenhum classificado encontrado! Adicione um agora!
          </div>
         )   
        }
        return (
            this.state.response.map((classificado, index) => (
                <div className="card border-primary text-dark mb-3" key={index}>
                    <div className="card-header border-primary">
                        {classificado.TITULO}
                    </div>
                    <div className="card-body">
                        <p>{classificado.DESCRICAO}</p>
                    </div>
                </div>

            ))
        )
    }
}
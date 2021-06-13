import React from 'react';
export default class ContagemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: []
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('https://spedy-challenge-server.herokuapp.com:3001/listar', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ response: data['data'] }));

    }
    render() {
        if(Object.keys(this.state.response).length>0){
        return (
            <div className="alert border-primary"><b>Classificados registrados: {Object.keys(this.state.response).length}</b></div>
        )
    }else{
        return(
            <div className="alert alert-warning" role="alert">
                    Nenhum classificado encontrado! Adicione um agora!
                    <br></br>
                </div>
        )
    }
    }
}
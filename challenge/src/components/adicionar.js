import React, { Component } from 'react';

export default class Adicionar extends Component {
    constructor(props) {
        super(props)
        this.state = { titulo: '', valor: 0.0, descricao: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        const { titulo, descricao, valor } = this.state
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo: titulo, descricao: descricao, valor: valor })
        };
        fetch('https://spedy-challenge-server.herokuapp.com:3001/adicionar/', requestOptions).then(response => response.json())
        .then(data => this.setState({ error: data.error }));
        window.location.reload(false);
        return;
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="mb-3">
                    <label className="form-label">Informe o título para o classificado</label>
                    <input className="form-control" name="titulo" value={this.state.titulo} required="required" onChange={this.handleChange}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Informe uma descrição para o classificado</label>
                    <input className="form-control" name="descricao" value={this.state.descricao} required="required" onChange={this.handleChange}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Informe o valor para o classificado</label>
                    <input type="number" step="0.01" className="form-control" name="valor" value={this.state.valor} required="required" onChange={this.handleChange}></input>
                </div>
                <input type="submit" className="btn btn-outline-primary" />
            </form>
        );
    }
}

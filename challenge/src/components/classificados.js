import React from 'react';
import './classificados.css';
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
        fetch('https://spedy-challenge-server.herokuapp.com:3001/listar', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ response: data['data'] }));

    }

    ndata(datao) {
        let data = new Date(datao);
        data.setSeconds(0, 0);
        var stamp = data.toUTCString().replace("GMT","");
        stamp = stamp.replace("Fri","");
        stamp = stamp.replace("Sat","");
        stamp = stamp.replace("Thu","");
        stamp = stamp.replace("Mon","");
        stamp = stamp.replace("Tue","");
        stamp = stamp.replace("Wed","");
        stamp = stamp.replace("Sun","");
        stamp = stamp.replace(",","");
        stamp = stamp.replace(":00","");
        //stamp = stamp.replace("00:00", "");
        return stamp;
    }
    render() {
        return (
            this.state.response.map((classificado, index) => (
                <div class="col-6">
                    < div className="card bg-light border-primary text-dark mb-3" key={index} >
                        <div className="card-header border-primary">
                            {classificado.TITULO}
                        </div>
                        <div className="card-body">
                            <p>{classificado.DESCRICAO}</p>
                        </div>
                        <div className="card-footer">
                            <p>Valor: <span className="text-info">R$ {classificado.VALOR}</span></p>
                            <p>Data adição: <span className="text-info">{this.ndata(classificado.DATA)}</span></p>
                        </div>
                    </div >
                </div>
            ))

        )
    }
}
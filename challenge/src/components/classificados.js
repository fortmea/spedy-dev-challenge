import React from 'react';
import $ from 'jquery';
import { response } from 'express';

export default class ClassificadoComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: "",
        }
    }

    componentDidMount() {
        this.fetch();
    }

    fetch() {
        var context = this;

        $.ajax({
            url: 'http://localhost:3000',
            method: 'GET',
            success: function (response) {
                context.setState({
                    response: jQuery.parse((JSON.stringify(response)))['data'],
                });
            }
        });
    }

    render() {
        for (x in response) {
            return (
                <div>
                    <h1>{this.state.response[x].titulo} {this.state.response[x].descricao}</h1>
                </div>
            );
        }
    }
}
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

// interface IMyComponentProps{
//     someDefaultValue: string;
// }

// interface IMyComponentState{
//     someValue: string;
// }

export default class Teste extends Component<any, any>{

    constructor(props: any) {
        super(props);

    }

    public render(){
        
        return (
            <div>
                <form className="form-teste">
                    <h1>Teste form</h1>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="pais">País</label>
                        <input type="text" name="pais" id="pais" className="form-control"/>
                    </div>

                    <input type="submit" className="btn btn-primary" value="Salvar"/>
                </form>
            </div>
        );

    }

}
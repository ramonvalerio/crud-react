import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';

//@observer
//@inject('crud')
class CrudPage extends React.Component {

    /* constructor(){
        super();

        this.state = {
            nome: ''
        };
    } */

    handleOnChange(newValue){
        this.setState( { nome: newValue } );
    }

    getTextField(name, onChange){
        return (
            <div>
                <label>Nome:</label>
                <input type="text"
                //value= { this.state.nome }
                value= { name }
                //onChange= { (e) => this.handleOnChange(e.target.value) } */
                onChange= { (e) => onChange(e.target.value) }
                //value= { undefined }
                //onChange= { undefined }
                />
            </div>
        );
    }

    getRadioButtons(){
        return (
            <React.Fragment>
                <div>
                    <input type="radio" />
                    <label>Homem</label>
                </div>
                <div>
                    <input type="radio" />
                    <label>Mulher</label>
                </div>
            </React.Fragment>
        );
    }

    getTable(pessoas){
        return (
            <div className="crud-table">
                { pessoas.map( (x, i) => this.getRow(i, x)) }
            </div>
        );
    }

    getRow(key, pessoa){
        return (
            <div key={ key } className="crud-row">
                <div>{ pessoa.nome }</div>
                <div>{ pessoa.sexo }</div>
            </div>
        );
    }

    render(){
        const pessoas = [
            { nome: 'Douglas', sexo: 'H' },
            { nome: 'Ramon', sexo: 'H' },
            { nome: 'Puta', sexo: 'M' }
        ]

        const store = this.props.crud;

        return(
            <div className="crud-page">
                { 
                    this.getTextField(store.name,
                    (newName) => store.handleNameChange(newName))
                }
                { this.getRadioButtons() }
                { this.getTable(pessoas) }
            </div>
        );
    }
}

//export default inject('crud')(observer(CrudPage));

export default compose(
    inject('crud'),
    observer
)(CrudPage);
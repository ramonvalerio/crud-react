import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';

//@observer
//@inject('crud')
class CrudPage extends React.Component {

    componentWillMount(){
        this.props.crud.getPessoas();
    }

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

    getRadioButton(key, sex, selectedSex, onClick){
        return (
            <div key={key}>
                <input type="radio" checked={ key === selectedSex} onClick={ () => onClick(key) } />
                <label>{sex}</label>
            </div>
        );
    }

    getRadioButtons(selectedSex, onClick){
        return [ "homem", "mulher", "naoDefinido"].map( (x,i) => (this.getRadioButton(i, x, selectedSex, onClick)) );
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
        /* const pessoas = [
            { nome: 'Douglas', sexo: 'H' },
            { nome: 'Ramon', sexo: 'H' },
            { nome: 'Puta', sexo: 'M' }
        ] */

        const store = this.props.crud;

        return(
            <div className="crud-page">
                { 
                    this.getTextField(store.name,
                    (newName) => store.handleNameChange(newName))
                }
                { this.getRadioButtons(store.sex,(x) => store.handleSexChange(x)) }
                { this.getTable(store.pessoas) }

                <Link to="/adm">
                    <button>Ir para AdmPage</button>
                </Link>
            </div>
        );
    }
}

//export default inject('crud')(observer(CrudPage));

export default compose(
    inject('crud'),
    observer
)(CrudPage);
import { observable } from 'mobx';
import axios from "axios";

class CrudStore {
    constructor() {
        this._name = observable.box('');
        this._sex = observable.box(undefined);
        this._pessoas = observable.box([]);
    }

    set name (value) { this._name.set(value); }
    get name () { return this._name.get(); }
    
    get sex () { return this._sex.get(); }
    set sex (value) { this._sex.set(value); }
    
    set pessoas(value) { this._pessoas.set(value); }
    get pessoas () { return this._pessoas.get(); } 

    handleNameChange(newName){
        this.name = newName;
        console.log(this.name);
    }

    handleSexChange(newSex){
        this.sex = newSex;
        console.log(this.sex);
    }

    getPessoas() {
        this.getPessoasPending();

        axios
        .get("http://localhost:5000/api/values",
        {
            "Access-Control-Allow-Origin": "*"
        })
        .then(this.getPessoasSuccess())
        .catch(this.getPessoasError());
    }

    getPessoasPending() {
        console.log("Pending");
    }

    getPessoasSuccess() {
        return (response) => {
            console.log("Success");
            this.pessoas = response.data;
        };
    }

    getPessoasError() {
        return (error) => {
            console.log("Error");
            console.log(error);
        };
    }
}

const store = new CrudStore();
export default store;
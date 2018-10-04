import { observable } from 'mobx';

class CrudStore {
    constructor() {
        this._name = observable.box('');
        this._sex = observable.box(undefined);
    }

    set name (value) { this._name.set(value); }
    get name () { return this._name.get(); }
    
    get sex () { return this._sex.get(); }
    set sex (value) { this._sex.set(value); }
    
    handleNameChange(newName){
        this.name = newName;
        console.log(this.name);
    }

    handleSexChange(newSex){
        this.sex = newSex;
        console.log(this.sex);
    }
}

const store = new CrudStore();
export default store;
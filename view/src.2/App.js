import React from 'react';
import { BrowserRouter,  Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './App.css';
import CrudPage from './CrudPage';
import CrudStore from './CrudStore';

const stores = {
  crud: CrudStore
}

export default class App extends React.Component {
  render() {
    return (
      <Provider { ...stores }>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={ CrudPage } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
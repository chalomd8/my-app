import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Formulario from './components/Formulario';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/pokedex" component={Formulario} />
            </Switch>
        </Router>
    );
}

export default App;
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Shibas from './pages/Shibas';
import Shiba from './pages/Shiba';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Shibas} />
                <Route exact path="/shiba/:id" component={Shiba} />
            </Switch>
        );
    }
}

export default Routes;

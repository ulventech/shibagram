import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import store from '../services/store';
import Router from '../routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Add icons
library.add(faSyncAlt);

const Container = styled.div``;

class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <Container>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Container>
      </Provider>
    );
  }
}

export default App;

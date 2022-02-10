import React from 'react';

import Form from './components/Form/Form';

import Diagram from './components/Diagram'

import './App.css';

import Container from 'components/Container/Container';
import Dashboard from 'components/Dashboard';

function App() {
  return (
    <div className="App">
      <Container>
        <Dashboard />
      </Container>
      <Form />
      <Diagram/>

    </div>
  );
}
export default App;

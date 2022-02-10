import React from 'react';

import Form from './components/Form/Form';

import './App.css';
import React from 'react';

import Container from 'components/Container/Container';
import Dashboard from 'components/Dashboard';

function App() {
  return (
    <div className="App">
      <Container>
        <Dashboard />
      </Container>
      <Form />
    </div>
  );
}
export default App;

import React from 'react';



import Form from './components/Form/Form';

import './App.css';

import Container from 'components/Container/Container';
import Dashboard from 'components/Dashboard';


function App() {
  return (
    <div className="App">
      <Form />

      <Container>
        <Dashboard />
      </Container>
    </div>
  );
}
export default App;

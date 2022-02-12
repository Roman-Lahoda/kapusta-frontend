import React from 'react';

import Form from './components/Form/Form';
import Header from './components/Header';
import Hero from './components/Hero';
import Backgraund from './components/Backgraund';
// import BackgraundHome from './components/BackgraundHome';

// import Diagram from './components/Diagram';

import s from './App.module.scss';

// import Test from './components/test/test';
// import { Balance } from './components/Balance/Balance';

// import Container from 'components/Container/Container';
// import Dashboard from 'components/Dashboard';

function App() {
  return (
    <div className={s.App} >
    {/* <Test /> */}
      {/* будет реализовано через условие (Если пользователь задогинен  <BackgraundHome/>  если нет  <Backgraund/>) */}
      <Backgraund/>
      <Header />
      <Hero/>
      <Form />
      {/* <Balance></Balance> */}
      {/* <Container>
        <Dashboard />
      </Container>*/}
      {/* <Diagram /> */}
    </div>
  );
}
export default App;

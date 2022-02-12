// import axios from 'axios';
// import { decode } from 'jsonwebtoken';
// import React, { useEffect, useState, Suspense } from 'react';
// import { useSelector } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';

import React from 'react';
import './App.css';

import Container from 'components/Container';
import Dashboard from 'components/Dashboard';
import Report from 'components/Report/Report';

function App() {
  return (
    <div className="App">
      {/* <Container>
        <Dashboard />
      </Container> */}

      <Container>
        <Report />
      </Container>
    </div>
  );
}

export default App;

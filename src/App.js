import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import routes from './routes/routes';
import Header from 'components/Header/Header';
import Loader from 'components/Loader';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Summary from 'components/Summary';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import Calculator from 'components/Calculator';
import Calendar from 'components/Calendar';

const HomePageView = lazy(() =>
  import('./views/HomePageView/HomePageView' /*webpackChunkName: "home-view" */),
);
const TransactionsView = lazy(() =>
  import('./views/TransactionsView/TransactionsView' /*webpackChunkName: "transactions-view" */),
);
// const ReportsView = lazy(() => import('views/ReportsView' /*webpackChunkName: "reports-view" */));
// const DevelopersView = lazy(() =>
// import('views/DevelopersView/DevelopersView' /*webpackChunkName: "developers-view" */),
// );

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute
            exact
            path={routes.home}
            restricted
            component={HomePageView}
            redirectTo={routes.transactions}
          />
          <PrivateRoute
            path={routes.transactions}
            component={TransactionsView}
            redirectTo={routes.home}
          />
          {/* <PrivateRoute path={routes.report} component={ReportsView} redirectTo={routes.home} /> */}
          {/* <PublicRoute
              path={routes.developers}
              component={DevelopersView}
              redirectTo={routes.home}
            /> */}
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
// -----------------------------------
// import React from 'react';

// import Form from './components/Form/Form';

// import './App.css';

// import Container from 'components/Container/Container';

// function App() {
//   return (
//     <div className="App">
//       <Container>
//         <>
//           {/* <TransactionsView /> */}
//           <TransactionsList />
//         </>
//       </Container>
//       {/* <Form /> */}
//     </div>
//   );
// }
// export default App;

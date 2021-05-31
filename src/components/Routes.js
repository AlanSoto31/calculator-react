import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
import Navbar from './Navbar';

function Routes() {
  return (
    <>
      <Navbar />
      <main className="flex-r-c-c">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/calculator" component={Calculator} />
          <Route path="/quote" component={Quote} />
          <Route component={Error} />
        </Switch>
      </main>
    </>
  );
}

export default Routes;

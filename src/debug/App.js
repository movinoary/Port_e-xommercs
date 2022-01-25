import { Route, Switch } from 'react-router-dom';
import { Footer, Nav } from '../components';
import { DetailProduct, Home, Login } from '../page';
import './App.css';

function App() {
  return (
    <>
    <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/detail-product/1'>
          <DetailProduct />
        </Route>
        <Route path='/sign-in'>
          <Login />
        </Route>
      </Switch>
    <Footer />
  </>
  );
}

export default App;

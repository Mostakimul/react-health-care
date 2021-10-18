import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import TheFooter from './components/TheFooter';
import TheNavbar from './components/TheNavbar';
import TheNavbarsub from './components/TheNavbarsub';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="bg-gray-700">
        <div className="container">
          <TheNavbarsub />
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container">
          <TheNavbar />
        </div>
      </div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <TheFooter />
    </Router>
  );
}

export default App;

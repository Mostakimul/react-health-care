import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import TheFooter from './components/TheFooter';
import TheNavbar from './components/TheNavbar';
import TheNavbarsub from './components/TheNavbarsub';
import AuthProvider from './context/AuthProvider';
import AllDepartments from './pages/AllDepartments';
import AllDoctors from './pages/AllDoctors';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import DoctorDetails from './pages/DoctorDetails';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Success from './pages/Success';

function App() {
  return (
    <AuthProvider>
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
          <Route path="/all-doctors">
            <AllDoctors />
          </Route>
          <Route path="/all-departments">
            <AllDepartments />
          </Route>
          <PrivateRoute path="/doctor-details/:docId">
            <DoctorDetails />
          </PrivateRoute>
          <PrivateRoute path="/appointment-success">
            <Success />
          </PrivateRoute>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <Route path="/contact-us">
            <Contact />
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
    </AuthProvider>
  );
}

export default App;

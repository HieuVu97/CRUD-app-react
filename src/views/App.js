import logo from './logo.svg';
import './App.scss';
import ComponentTest from './Test/ComponentTest';
import ListToDo from './Todos/ListToDo';
import Nav from './Nav/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Test/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {
  // const App = () => {}
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact >
              <Home />
            </Route>
            <Route path="/todo" >
              <ListToDo />
            </Route>
            <Route path="/about" >
              <ComponentTest />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id" >
              <DetailUser />
            </Route>


          </Switch>

        </header>


        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </div>

    </Router>
  );
}

export default App;

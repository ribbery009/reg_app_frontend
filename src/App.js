import logo from './logo.svg';
import './App.css';
import './assets/scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Login from './components/Login/index'

function App() {
  return (
          <Login />
  );
}

export default App;

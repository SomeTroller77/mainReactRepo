import logo from './logo.svg';
import './App.css';
import {Outlet, Link} from 'react-router-dom';


function App() {
  return (
    <>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/other">other</Link></li>
        <li><Link to='/login'>login</Link></li>
      </nav>
      <Outlet/>
    </>
  );
}

export default App;

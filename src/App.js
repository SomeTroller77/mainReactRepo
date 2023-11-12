import logo from './logo.svg';
import './App.css';
import {Outlet, Link} from 'react-router-dom';


function App() {
  return (
    <>
      <div className='navbar'>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/other">other</Link></li>
            <li><Link to='/login'>login</Link></li>
            <li><Link to='/brands'>Brands</Link></li>
          </ul>
        </nav>
      </div>
        <Outlet/>
    </>
  );
}

export default App;

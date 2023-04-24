import Home from './components/Home';
import User from './components/User';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/user'}>User</Link></li>
        </ul>
        <div>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/user'} element={<User />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
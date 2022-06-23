import classes from './Header.module.css';

import { authActions } from '../store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Header = () => {

  const auth = useSelector(state => state.authentication.isAuthenticated)

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(authActions.logout())
  }


  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {auth &&
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        }
      </nav>
    </header>
  );
};

export default Header;

import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      end
      to="/"
      // style={styles.link}
      // activeStyle={styles.activeLink}
      style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
    >
      Главная
    </NavLink>

    <NavLink
      to="/authors"
      // style={styles.link}
      // activeStyle={styles.activeLink}
      style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
    >
      Авторы
    </NavLink>

    <NavLink
      to="/books"
      // style={styles.link}
      // activeStyle={styles.activeLink}
      style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
    >
      Книги
    </NavLink>
  </nav>
);

export default Navigation;

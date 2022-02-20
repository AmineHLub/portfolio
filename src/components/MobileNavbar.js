import '../mobile-styling/navbar.css';
import burgerMenu from '../assets/burger-menu.png';

function MobileNavbar() {
  return (
    <nav className="mobile-nav-fixed">
      <ul className="d-flex">
        <li>
          <button type="button" className="burger-menu">
            <img src={burgerMenu} alt="menu" />
          </button>
        </li>
        <li>
          <h2 className="navbar-title"> M.A Hajltaief </h2>
        </li>
        <li />
      </ul>
    </nav>
  );
}

export default MobileNavbar;

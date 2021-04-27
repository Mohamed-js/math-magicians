import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <div className="max-width flex-row">
      <div className="nav-logo">Math Magicians</div>
      <div className="tabs flex-row">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

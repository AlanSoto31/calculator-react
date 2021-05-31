import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-cont flex-sb-c">
    <h1>Math Magicians</h1>
    <div className="links-cont">
      <Link to="/">Home </Link>
      <Link to="/calculator">Calculator </Link>
      <Link to="/quote">Quote </Link>
    </div>
  </div>
);

export default Navbar;

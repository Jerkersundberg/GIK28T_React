import '../App.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Header</h1>

      <div>
        <Link to="/images">images</Link>
        <Link to="/videos">videos</Link>
      </div>
    </header>
  );
};

export default Header;

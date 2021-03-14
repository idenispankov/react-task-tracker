import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <p>CopyRight &copy; 2021</p>
      {location.pathname === '/about' ? (
        <Link to='/'>Go Back</Link>
      ) : (
        <Link to='/about'>About</Link>
      )}
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  if (props.location.pathname !== '/' && props.location.pathname !== '/register') {
    return (
      <Link to={`/`}>
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p className="f3 link dim black underline pa3 pointer">Sign out</p>
        </nav>
      </Link>
    );
  } else {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Link to={'/'}>
          <p className="f3 link dim black underline pa3 pointer">Sign In</p>
        </Link>
        <Link to={'/register'}>
          <p className="f3 link dim black underline pa3 pointer">Register</p>
        </Link>
      </nav>
    );
  }
};

export default Navigation;

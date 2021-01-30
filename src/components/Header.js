import React from 'react';
import PropTypes from 'prop-types';

// Stateless Functional Component
const Header = props => (
  <header className="top">
  {/* <h1>Sushi</h1> */}
  <img src="/images/sushi-logo.png" alt="Sushi Logo" width="269" height="184" /><br />
  <h3 className="tagline">
    <span>{props.tagline}</span>
  </h3>
</header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
}

export default Header;
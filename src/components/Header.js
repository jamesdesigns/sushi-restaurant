import React from 'react';

// Stateless Functional Component
const Header = props => (
  <header className="top">
  <h1>Sushi</h1>
  <h3 className="tagline">
  <span>{props.tagline}</span>
</h3>
</header>
);

export default Header;
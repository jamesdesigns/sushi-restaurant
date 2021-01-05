import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>Sushi
          {/* <span className="ofThe">
            <span className="of">of</span> 
            <span className="The">The</span>
          </span>
            Day */}
            </h1>
        <h3 className="tagline">
        <span>Fresh Sushi Market</span>
      </h3>
      </header>
    )
  }
}

export default Header;
// import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Inventory />
        <Order />
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

export default App;

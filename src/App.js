import React from 'react';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <Footer />
      </div>
    );
  }
};

export default App;

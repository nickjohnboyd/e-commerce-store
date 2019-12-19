import React from 'react';
import store from './store/index';

import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/tdmichaelis/typicode/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      store.dispatch({
        type: 'CREATE_PRODUCTS',
        products
      });
      console.log(store.getState());
      return (
        <div className="App">
          <div className="content">
            <MenuBar />
          </div>
          <Footer />
        </div>
      );
    }
  }
};

export default App;

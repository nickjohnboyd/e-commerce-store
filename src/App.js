import React from 'react';
import store from './store/index';

import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import './css/style.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      prodIsLoaded: false,
      products: [],
      catIsLoaded: false,
      categories: []
    };
  }

  componentDidMount() {
    //Get products
    fetch("https://my-json-server.typicode.com/tdmichaelis/typicode/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            prodIsLoaded: true,
            products: result
          });
        },
        (error) => {
          this.setState({
            prodIsLoaded: true,
            error
          });
        }
      )
    // Get categories 
    fetch("https://my-json-server.typicode.com/tdmichaelis/typicode/categories")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            catIsLoaded: true,
            categories: result
          });
        },
        (error) => {
          this.setState({
            catIsLoaded: true,
            error
          });
        }
      )
  }

  runDispatch = (products, categories) => {
    store.dispatch({
      type: 'CREATE_PRODUCTS',
      products
    });
    store.dispatch({
      type: 'CREATE_CATEGORIES',
      categories
    });
  }

  render() {
    const { error, prodIsLoaded, catIsLoaded, products, categories } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!prodIsLoaded || !catIsLoaded) {
      return <div>Loading...</div>;
    } else {
      
      this.runDispatch(products, categories);
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

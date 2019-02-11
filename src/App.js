import React, { Component } from 'react';
import './App.css';
import ProductItem from './components/ProductItem'
import AddItem from './components/AddItem'

const products = [

  {
    name: 'iPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 600
  }
]
localStorage.setItem('products', JSON.stringify(products))

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    }
  }
  componentWillMount() {
    const products = this.getProducts()

    this.setState({
      products
    })
  }

  getProducts = () => {
    return this.state.products
  }

  onDelete = (name) => {
    const products = this.getProducts();

    const filterProduct = products.filter(product => {
      return product.name != name
    })
    console.log(filterProduct)
    this.setState({
      products: filterProduct
    })
  }

  addProduct = (name, price) => {
    const products = this.getProducts();
    products.push({
      name, price
    })
    this.setState({
      products
    })
  }

  onEditSubmit = (name, price, originalName) => {
    let products = this.getProducts()
    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price;
      }
      return product;
    })
    this.setState({
      products
    })
    console.log(name, price, originalName)
  }
  render() {
    return (
      <div className="App">
        <h1>Product Manager</h1>
        <AddItem onAdd={this.addProduct} />
        <hr />
        {this.state.products.map(product => {
          return <ProductItem
            key={product.name}
            {...product}
            onDelete={this.onDelete}
            onEditSubmit={this.onEditSubmit}
          />
        })}
      </div>
    );
  }
}

export default App;

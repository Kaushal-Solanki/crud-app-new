import React, { Component } from 'react'

class AddItem extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.nameInput.value, this.priceInput.value)
    this.nameInput.value = ''
    this.priceInput.value = ''
  }
  render() {
    return (
      <div>
        <h3>Add Product</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder="Name" ref={nameInput => this.nameInput = nameInput} />
          <input type='text' placeholder="Price" ref={priceInput => this.priceInput = priceInput} />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddItem
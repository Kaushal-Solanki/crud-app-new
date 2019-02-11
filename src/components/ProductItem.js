import React, { Component } from 'react'

class ProductItem extends Component {
  constructor() {
    super()
    this.state = {
      isEdit: false
    }
  }

  onDelete = () => {
    const { name, onDelete } = this.props
    onDelete(name)
  }

  onEdit = () => {
    this.setState({
      isEdit: true
    })
  }

  onEditSubmit = (e) => {
    e.preventDefault()
    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name)
    this.setState({
      isEdit: false
    })
  }
  render() {
    const { name, price } = this.props
    return (
      <div>
        {this.state.isEdit ?
          (
            <form onSubmit={this.onEditSubmit}>
              <input type='text' placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name} />
              <input type='text' placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue={price} />
              <button>Save</button>
            </form>
          )
          : (

            <div>
              <span>{name}</span>&nbsp;&nbsp;
            <span>{price}</span>&nbsp;&nbsp;
            <button onClick={this.onEdit}>Edit</button>
              <button onClick={this.onDelete}>Delete</button>
            </div>
          )}

      </div>
    )
  }
}

export default ProductItem

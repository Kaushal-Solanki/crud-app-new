import React, { Component } from 'react'
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func
}


class File extends Component {
  render() {
    const { title, name, onClick } = this.props
    return (
      <div>
        <h1>Title:{title}</h1>
        <h2>Name:{name}</h2>
        <div onClick={onClick}>Click Me</div>
      </div>
    )
  }
}

File.propTypes = propTypes
export default File

import React from 'react'
// import ReactDOM from 'react-dom';

import QuantityDisplay from './quantity-display.js'
import images from '../config/images.js'
const { imgs, imgAlts } = images

class ResourceIcon extends React.Component {
  render () {
    return (
      <div className='resource-icon'>
        <img src={imgs[`${this.props.type}Icon`]} alt={imgAlts[`${this.props.type}Icon`]} />
        <QuantityDisplay quantity={this.props.quantity} />
      </div>
    )
  }
}

export default ResourceIcon

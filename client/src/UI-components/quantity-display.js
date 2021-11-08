import React from 'react'
// import ReactDOM from 'react-dom';

import images from '../config/images.js'
const { imgs, imgAlts } = images

class QuantityDisplay extends React.Component {
  constructImageRef (symbol) {
    let returnString
    const punctuations = {
      ',': 'comma',
      '/': 'slash'
    }
    Object.keys(punctuations).forEach(key => {
      if (key === symbol) {
        returnString = `punctuation_${punctuations[key]}`
      }
    })
    return returnString || `number_${symbol}`
  }

  render () {
    return (
      <span className='quantity_display'>
        {String(this.props.quantity).split('').map(symbol => <img key='1' src={imgs[this.constructImageRef(symbol)]} alt={imgAlts[this.constructImageRef(symbol)]} />)}
      </span>
    )
  }
}

export default QuantityDisplay

import React from 'react';
//import ReactDOM from 'react-dom';

import imgs from '../config/images.js';
import img_alts from '../config/images.js';

class QuantityDisplay extends React.Component {
    
    constructImageRef(symbol) {
        let returnString;
        const punctuations = {
            ',': 'comma',
            '/': 'slash',
        }
        Object.keys(punctuations).forEach(key => {
            if (key === symbol) {
                returnString = `punctuation_${punctuations[key]}`;
            }
        });
        return returnString || `number_${symbol}`;
    } 

    render() {

        return (
            <span className="quantity_display">
                {String(this.props.quantity).split('').map(symbol => <img src={imgs[this.constructImageRef(symbol)]} alt={img_alts[this.constructImageRef(symbol)]} />) }
            </span>
        );
    }


}

export default QuantityDisplay;

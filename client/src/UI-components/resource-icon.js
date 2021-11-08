import React from 'react';
//import ReactDOM from 'react-dom';

import imgs from '../config/images.js';
import img_alts from '../config/images.js';

import QuantityDisplay from './quantity-display.js';

class ResourceIcon extends React.Component {
 
    render() {
        return (
            <div className="resource-icon">
                <img src={imgs[`${this.props.type}_icon`]} alt={img_alts[`${this.props.type}_icon`]} />
                <QuantityDisplay quantity={this.props.quantity} />
            </div>
        );
    }


}

export default ResourceIcon;

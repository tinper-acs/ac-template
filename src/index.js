/**
 * 组件源码
 */

import React, { Component } from 'react';
import { Button } from 'tinper-bee';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string
};

class AcDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="ac-template-wrap">
                Hello,{this.props.title}
            </div>
        );
    }
}


AcDemo.propTypes = propTypes;
AcDemo.defaultProps = {
    title: "World"
}
export default AcDemo;

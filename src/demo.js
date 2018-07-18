import React, { Component } from 'react';
import { Button } from 'tinper-bee';
import AcDemo from './index';
import 'tinper-bee/assets/tinper-bee.css';
import './index.less';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <AcDemo />
            </div>
        );
    }
}

export default Demo;

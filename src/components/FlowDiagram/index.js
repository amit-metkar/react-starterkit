import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlowDiagram extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            nodeId: 1
         }
    }
    render() { 
        return ( 
            <div className="drop-zone parent-drawflow" ref={this.container} onDrop={this.drop} onDragOver={this.allowDrop}>

            </div>
         );
    }
}

FlowDiagram.propTypes = {
    onDragOver: PropTypes.func
}
 
export default FlowDiagram;
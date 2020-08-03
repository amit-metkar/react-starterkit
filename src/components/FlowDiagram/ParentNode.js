import React, { Component } from "react";
import PropTypes from 'prop-types';

class ParentNode extends Component {
  render() {
    const { id, pos_x, pos_y, renderContent } = this.props
    return (
      <div class="parent-node">
        <div id={'node-' + id} class="drawflow-node facebook" style={{top: `${pos_x}px`, left: `${pos_y}px`}}>
          <div class="inputs">
            <div class="input input_1"></div>
          </div>
          <div class="drawflow_content_node">
              {renderContent(this.props)}
            {/* <div>
              <div class="canvas-item">facebook</div>
            </div> */}
          </div>
          <div class="outputs">
            <div class="output output_1"></div>
          </div>
        </div>
      </div>
    );
  }
}

ParentNode.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    inputs: PropTypes.object,
    outputs: PropTypes.object,
    pos_x: PropTypes.number.isRequired,
    pos_y: PropTypes.number.isRequired,
    renderContent: PropTypes.func
}
ParentNode.defaultProps = {
    className: '',
    inputs: { connections: [] },
    outputs: { connections: [] }
}

export default ParentNode;

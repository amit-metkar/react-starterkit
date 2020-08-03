import React from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import style from "./style";
import Drawflow from "../../vendor/drawflow";
import "../../vendor/drawflow/index.css";

const nodes = ["facebook", "slack", "github", "telegram", "aws", "log", "google", "email", "template"];

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  state = {
    draggingItem: null,
  };

  componentDidMount() {
    this.editor = new Drawflow(this.container.current);
    this.editor.drawflow = {
      drawflow: {
        Home: {
          data: {
            "1": {
              id: 1,
              name: "slack",
              data: {},
              class: "slack",
              html: '<div><div class="canvas-item">slack</div></div>',
              typenode: false,
              inputs: { input_1: { connections: [{ node: "6", input: "output_1" }] } },
              outputs: {},
              pos_x: 1028,
              pos_y: 87,
            },
            "2": {
              id: 2,
              name: "telegram",
              data: { channel: "channel_2" },
              class: "telegram",
              html: '<div><div class="canvas-item">telegram</div></div>',
              typenode: false,
              inputs: { input_1: { connections: [{ node: "6", input: "output_1" }] } },
              outputs: {},
              pos_x: 1032,
              pos_y: 184,
            },
            "3": {
              id: 3,
              name: "email",
              data: {},
              class: "email",
              html: '<div><div class="canvas-item">email</div></div>',
              typenode: false,
              inputs: { input_1: { connections: [{ node: "4", input: "output_1" }] } },
              outputs: {},
              pos_x: 1033,
              pos_y: 439,
            },
            "4": {
              id: 4,
              name: "template",
              data: { template: "Write your template" },
              class: "template",
              html: '<div><div class="canvas-item">template</div></div>',
              typenode: false,
              inputs: { input_1: { connections: [{ node: "5", input: "output_1" }] } },
              outputs: {
                output_1: {
                  connections: [
                    { node: "3", output: "input_1" },
                    { node: "10", output: "input_1" },
                  ],
                },
              },
              pos_x: 607,
              pos_y: 304,
            },
            "5": {
              id: 5,
              name: "github",
              data: { name: "https://github.com/jerosoler/Drawflow" },
              class: "github",
              html: '<div><div class="canvas-item">github</div></div>',
              typenode: false,
              inputs: {},
              outputs: { output_1: { connections: [{ node: "4", output: "input_1" }] } },
              pos_x: 341,
              pos_y: 191,
            },
            "6": {
              id: 6,
              name: "facebook",
              data: {},
              class: "facebook",
              html: '<div><div class="canvas-item">facebook</div></div>',
              typenode: false,
              inputs: {},
              outputs: {
                output_1: {
                  connections: [
                    { node: "1", output: "input_1" },
                    { node: "2", output: "input_1" },
                    { node: "10", output: "input_1" },
                  ],
                },
              },
              pos_x: 347,
              pos_y: 87,
            },
            "10": {
              id: 10,
              name: "log",
              data: {},
              class: "log",
              html: '<div><div class="canvas-item">log</div></div>',
              typenode: false,
              inputs: {
                input_1: {
                  connections: [
                    { node: "4", input: "output_1" },
                    { node: "6", input: "output_1" },
                  ],
                },
              },
              outputs: {},
              pos_x: 1031,
              pos_y: 363,
            },
          },
        },
        Other: {
          data: {
            "7": {
              id: 7,
              name: "personalized",
              data: {},
              class: "personalized",
              html: '<div><div class="canvas-item">personalized</div></div>',
              typenode: false,
              inputs: {
                input_1: {
                  connections: [
                    { node: "11", input: "output_1" },
                    { node: "11", input: "output_2" },
                    { node: "11", input: "output_3" },
                    { node: "11", input: "output_4" },
                  ],
                },
              },
              outputs: { output_1: { connections: [{ node: "8", output: "input_1" }] } },
              pos_x: 764,
              pos_y: 227,
            },
            "8": {
              id: 8,
              name: "dbclick",
              data: { name: "Hello World!!" },
              class: "dbclick",
              html: '<div><div class="canvas-item">dbclick</div></div>',
              typenode: false,
              inputs: { input_1: { connections: [{ node: "7", input: "output_1" }] } },
              outputs: { output_1: { connections: [{ node: "11", output: "input_2" }] } },
              pos_x: 209,
              pos_y: 38,
            },
            "11": {
              id: 11,
              name: "multiple",
              data: {},
              class: "multiple",
              html: '<div><div class="canvas-item">multiple</div></div>',
              typenode: false,
              inputs: { 
                input_1: { connections: [] }, 
                input_2: { connections: [{ node: "8", input: "output_1" }] }, 
                input_3: { connections: [] } },
              outputs: { 
                output_1: { connections: [{ node: "7", output: "input_1" }] }, 
                output_2: { connections: [{ node: "7", output: "input_1" }] }, 
                output_3: { connections: [{ node: "7", output: "input_1" }] }, 
                output_4: { connections: [{ node: "7", output: "input_1" }] } },
              pos_x: 179,
              pos_y: 272,
            },
          },
        },
      },
    };
    this.editor.start();
    // Events!
    this.editor.on("nodeCreated", function (id) {
      console.log("Node created " + id);
    });

    this.editor.on("nodeRemoved", function (id) {
      console.log("Node removed " + id);
    });

    this.editor.on("nodeSelected", function (id) {
      console.log("Node selected " + id);
    });

    this.editor.on("moduleCreated", function (name) {
      console.log("Module Created " + name);
    });

    this.editor.on("moduleChanged", function (name) {
      console.log("Module Changed " + name);
    });

    this.editor.on("connectionCreated", function (connection) {
      console.log("Connection created");
      console.log(connection);
    });

    this.editor.on("connectionRemoved", function (connection) {
      console.log("Connection removed");
      console.log(connection);
    });

    this.editor.on("mouseMove", function (position) {
      // console.log("Position mouse x:" + position.x + " y:" + position.y);
    });

    this.editor.on("nodeMoved", function (id) {
      console.log("Node moved " + id);
    });

    this.editor.on("translate", function (position) {
      console.log("Translate x:" + position.x + " y:" + position.y);
    });
  }

  drag = (e, data) => {
    console.log(e, data);
    this.setState((prev) => ({ ...prev, draggingItem: data }));
  };

  drop = (e) => {
    console.log(e);
    if (this.state.draggingItem) {
      this.addNodeToDrawFlow(this.state.draggingItem, e.clientX, e.clientY);
    }
  };

  allowDrop = (e) => {
    e.preventDefault();
  };

  getDraggableItems = () => {
    return nodes.map((data) => (
      <div key={data} className="drag-item" draggable="true" onDragStart={(e) => this.drag(e, data)}>
        {data}
      </div>
    ));
  };

  addNodeToDrawFlow = (name, pos_x, pos_y) => {
    if (this.editor.editor_mode === "fixed") {
      return false;
    }
    pos_x = pos_x * (this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth)) - this.editor.precanvas.getBoundingClientRect().x * (this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth));
    pos_y = pos_y * (this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight)) - this.editor.precanvas.getBoundingClientRect().y * (this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight));

    var node = `<div><div class="canvas-item">${name}</div></div>`;
    console.log(name, pos_x, pos_y)
    this.editor.addNode(name, 1, 1, pos_x, pos_y, name, {}, node);
  };

  export = () => {
    console.log(this.editor.export())
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <button onClick={this.export}>Export</button>
        <div className="draggable-list">{this.getDraggableItems()}</div>
        <div className="drop-zone" ref={this.container} onDrop={this.drop} onDragOver={this.allowDrop}></div>
      </div>
    );
  }
}

Canvas.propTypes = {};

Canvas.defaultProps = {};

export default withStyles(style)(Canvas);

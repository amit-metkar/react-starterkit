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
      console.log("Position mouse x:" + position.x + " y:" + position.y);
    });

    this.editor.on("nodeMoved", function (id) {
      console.log("Node moved " + id);
    });

    this.editor.on("zoom", function (zoom) {
      console.log("Zoom level " + zoom);
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
    pos_x = pos_x * (this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)) - this.editor.precanvas.getBoundingClientRect().x * (this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom));
    pos_y = pos_y * (this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)) - this.editor.precanvas.getBoundingClientRect().y * (this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom));

    var node = `
      <div>
        <div class="drag-item">${name}</div>
      </div>
      `;
    console.log(name, pos_x, pos_y)
    this.editor.addNode(name, 1, 1, pos_x, pos_y, name, {}, node);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="draggable-list">{this.getDraggableItems()}</div>
        <div className="drop-zone" ref={this.container} onDrop={this.drop} onDragOver={this.allowDrop}></div>
      </div>
    );
  }
}

Canvas.propTypes = {};

Canvas.defaultProps = {};

export default withStyles(style)(Canvas);

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import style from "./style";

class App extends React.Component {
  componentDidMount() {
    this.props.appInitialize();
  }

  render() {
    const { isAppReady, classes } = this.props;
    return (
      <div className={classes.root}>
        <header className="App-header">React Starterkit {isAppReady ? "app is ready!" : "app is not ready!"}</header>
        <hr color="darkgray" size="1"></hr>
      </div>
    );
  }
}

App.propTypes = {
  isAppReady: PropTypes.bool.isRequired,
  appInitialize: PropTypes.func,
};

App.defaultProps = {
  appInitialize: () => {},
};

export default withStyles(style)(App);

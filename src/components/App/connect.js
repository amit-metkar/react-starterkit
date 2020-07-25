import { selectAppReady, appInitialize } from "../../state/app";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const mapStateToProps = createStructuredSelector({
  isAppReady: selectAppReady,
});

const mapDispatchToProps = dispatch => ({
    appInitialize: () => dispatch(appInitialize())
})

export default connect(mapStateToProps, mapDispatchToProps)
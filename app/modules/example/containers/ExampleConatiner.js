import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import ExampleComponent from "../components/ExampleComponent";
import { bindActionCreators } from "redux";
import { changeTitle } from "../actions";

class ExampleContainer extends Component {
  render = () => <ExampleComponent changeTitle={this.props.changeTitle} example={this.props.example} />;
}

const mapStateToProps = store => {
  return {
    example: store.example
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeTitle
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);

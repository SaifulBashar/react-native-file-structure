import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class ExampleComponent extends Component {
  render = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{this.props.example.exampleTitle}</Text>
        <Button
          title="Press"
          onPress={() => {
            this.props.changeTitle({ title: "New title" });
          }}
        />
      </View>
    );
  };
}

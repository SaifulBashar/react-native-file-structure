import { StackNavigator } from "react-navigation";

import ExampleConatiner from "../modules/example/containers/ExampleConatiner";

export default (Example = StackNavigator({
  login: {
    screen: ExampleConatiner,
    navigationOptions: {
      title: "Example home"
    }
  }
}));

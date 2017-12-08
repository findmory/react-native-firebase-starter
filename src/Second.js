import React from "react";
import { StyleSheet, Platform, Image, Text, View, Button } from "react-native";

import { observer } from "mobx-react";

import TestStore from "../stores/testStore";

@observer
export default class Second extends React.Component {
  componentDidMount() {}

  _changeCounter = () => {
    TestStore.counter -= 1;
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="down" onPress={this._changeCounter} />
        <Text>The value is {TestStore.counter}</Text>

        <View style={styles.modules}>
          <Text style={styles.modulesHeader}>Another View.</Text>
          <Button
            title="back"
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  logo: {
    height: 80,
    marginBottom: 16,
    width: 80
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  modules: {
    margin: 20
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: "center"
  }
});

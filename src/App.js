import React from "react";
import { StyleSheet, Platform, Image, Text, View, Button } from "react-native";

//import firebase from 'react-native-firebase';
import { observer } from "mobx-react";

import TestStore from "../stores/testStore";

@observer
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
  }

  _changeCounter = () => {
    TestStore.counter += 1;
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/RNFirebase512x512.png")}
          style={[styles.logo]}
        />
        <Text style={styles.welcome}>
          Welcome to the React Native{"\n"}Firebase(ish) starter project!
        </Text>
        <Button title="up" onPress={this._changeCounter} />
        <Button
          title="next"
          onPress={() => this.props.navigation.navigate("SecondRoute")}
        />
        <Text>The value is {TestStore.counter}</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        {Platform.OS === "ios" ? (
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{"\n"}
            Cmd+D or shake for dev menu
          </Text>
        ) : (
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{"\n"}
            Cmd+M or shake for dev menu
          </Text>
        )}
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

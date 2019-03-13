/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { Button, Input, TextArea, Picker, DatePicker, FloatingButton } from "react-native-atom-elements";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      pickerValue: 1,
      pickerData: [{ value: 1, label: 1 }, { value: 2, label: 2 }, { value: 3, label: 3 }],
      datePicked: ""
    }
  }

  render() {

    const actions = [
      { text: 'Accessibility', icon: "help", name: 'bt_accessibility', position: 2, onPress: () => this.handleDisplayAlert("Accessibility") },
      { text: 'Location', icon: "pin", name: 'bt_room', position: 1, onPress: () => this.handleDisplayAlert("Location") },
      { text: 'Video', icon: "videocam", name: 'bt_videocam', position: 3, onPress: () => this.handleDisplayAlert("Video") }
    ];

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.innerContainer}>
            <Button onPress={this.handleButtonClick} color="#F00" rounded outline size={"small"}>
              <Text>Click Me</Text>
            </Button>
            <Input onChangeText={this.handleTextChange} placeholder="Name" />
            <TextArea color="#0F0" onChangeText={this.handleTextChange} placeholder="Description" />
            <Picker color="#00F" onValueChange={this.handleValueChange} selectedValue={this.state.pickerValue}>
              <Picker.Item value="1" label="1" />
              <Picker.Item value="2" label="2" />
              <Picker.Item value="3" label="3" />
            </Picker>
            <DatePicker onDateChange={this.handleDateChange} color="#F0F" />
          </View>
        </ScrollView>
        <FloatingButton actions={actions} />
      </View>
    );
  }

  handleDisplayAlert = (btnName) => {
    Alert.alert("Hello", btnName);
  }

  handleButtonClick = () => {
    console.log("It works!");
  }

  handleTextChange = (text) => {
    console.log(text);
  }

  handleValueChange = (value) => {
    this.setState({ pickerValue: value })
  }

  handleDateChange = (date) => {
    console.log(date);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  }
});

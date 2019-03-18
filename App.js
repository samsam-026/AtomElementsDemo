/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, Alert } from 'react-native';
import { Button, Input, TextArea, Picker, DatePicker, Text, FloatingButton, NotificationBarManager, Notification } from "react-native-atom-elements";

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

  componentDidMount() {
    NotificationBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    NotificationBarManager.unregisterMessageBar();
  }

  render() {

    const actions = [
      { text: 'Accessibility', image: require("./assets/images/accessibility.png"), name: 'bt_accessibility', position: 2, onPress: () => this.handleDisplayAlert("Accessibility") },
      { text: 'Location', icon: "pin", name: 'bt_room', position: 1, onPress: () => this.handleDisplayAlert("Location") },
      { text: 'Video', icon: "videocam", name: 'bt_videocam', position: 3, onPress: () => this.handleShowNotification() }
    ];

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.innerContainer}>
            <Text size={"h2"} bold >Alom Elements Demo</Text>
            <Button onPress={this.handleButtonClick} color="#F00" rounded outline size={"small"}>
              <Text>Click Me</Text>
            </Button>
            {/* <Button onPress={this.handleShowNotification} color="#F00" rounded block size={"large"}>
              <Text>Show Notification</Text>
            </Button> */}
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
        <Notification ref={"alert"} />
        <FloatingButton actions={actions} />
        {/* <FloatingButton onPress={this.handleShowNotification} image={require("./assets/images/accessibility.png")} /> */}
      </View>
    );
  }

  handleShowNotification = () => {
    NotificationBarManager.showAlert({
      message: 'Your alert message goes here',
      // image: require("./assets/images/accessibility.png")
    });
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
    padding: 20,
  }
});

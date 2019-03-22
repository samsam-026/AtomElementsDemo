/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import {
  Button, FormInput, FormTextArea, FormPicker, Picker, FormDatePicker, Text,
  FloatingButton, NotificationBarManager, Notification, Card, ListItem,
  CardList, ListView, Form
} from "react-native-atom-elements";

export default class App extends Component {

  actions = [
    { text: 'Accessibility', image: require("./assets/images/accessibility.png"), name: 'bt_accessibility', position: 2, onPress: () => this.handleDisplayAlert("Accessibility") },
    { text: 'Location', icon: "pin", name: 'bt_room', position: 1, onPress: () => this.handleDisplayAlert("Location") },
    { text: 'Video', icon: "videocam", name: 'bt_videocam', position: 3, onPress: () => this.handleShowNotification() }
  ];

  listData = [
    { title: "Heading 1", description: "Description 1", image: require("./assets/images/scenery.jpg") },
    { title: "Heading 2", description: "Description 2", image: require("./assets/images/scenery.jpg") },
    { title: "Heading 3", description: "Description 3", image: require("./assets/images/scenery.jpg") }
  ];

  pickerData = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" }
  ];

  formElements = [
    { label: "Full Name", type: "text", onChangeText: (value) => this.handleTextChange(value), placeholder: "John Doe" },
    { label: "Email", type: "text", onChangeText: (value) => this.handleTextChange(value), placeholder: "john.doe@gmail.com", isValid: (value) => this.checkInputValidity(value) },
    { label: "Type", type: "picker", onValueChange: (value) => this.handleValueChange(value), pickerData: this.pickerData },
    { label: "Date", type: "date", onDateChange: (value) => this.handleDateChange(value) },
    { label: "Address", type: "textarea", onChangeText: (value) => this.handleTextChange(value) },
  ];

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

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.innerContainer}>
            <Text size={"h4"} bold >Alom Elements Demo</Text>
            <Button onPress={this.handleButtonClick} color="#486c86" block>
              <Text>Click Me</Text>
            </Button>
            {/* <Button onPress={this.handleShowNotification} color="#F00" rounded block size={"large"}>
              <Text>Show Notification</Text>
            </Button> */}
            <FormInput onChangeText={this.handleTextChange} label="Name" />
            <FormTextArea color="#0F0" onChangeText={this.handleTextChange} label="Description" />
            <FormPicker color="#00F" onValueChange={this.handleValueChange} selectedValue={this.state.pickerValue} label="Number">
              <Picker.Item value="1" label="1" />
              <Picker.Item value="2" label="2" />
              <Picker.Item value="3" label="3" />
            </FormPicker>
            <FormDatePicker onDateChange={this.handleDateChange} color="#F0F" label="Date" />
            <Card title="Heading" description="Description" image={require("./assets/images/scenery.jpg")} />
            <ListItem title="Heading" description="Description" image={require("./assets/images/scenery.jpg")} >
              <ListItem title="Heading" onPress={this.handleShowNotification} description="Description" />
            </ListItem>
            <CardList data={this.listData} horizontal />
            <ListView data={this.listData} />
            <Form formElements={this.formElements} />
          </View>
        </ScrollView>
        <Notification ref={"alert"} />
        <FloatingButton actions={this.actions} />
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
    this.setState({ datePicked: date })
  }

  checkInputValidity = (text) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(text);
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
    paddingBottom: 100
  }
});

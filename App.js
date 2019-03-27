/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import {
  Text, Icon, FloatingButton, NotificationBarManager, Notification,
  CardList, ListView, Form,
  NavBar, NavBarRight, NavBarLeft, NavBarBody, NavBarButton,
  TabBar, TabItem, PillView
} from "firstBorn";
import Home from "./src/HomePage";

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

  pillScenes = [
    { scene: <Home /> },
    { scene: <CardList data={this.listData} /> },
    { scene: <ListView data={this.listData} /> },
    { scene: <View style={styles.innerContainer}><Form formElements={this.formElements} /></View> },
  ];

  pillHeaders = [
    { title: 'Home', icon: "home" },
    { title: 'Card List', icon: "card" },
    { title: 'List View', icon: "list" },
    { title: 'Form', icon: "help" }
  ]

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
        <NavBar>
          <NavBarLeft />
          <NavBarBody>
            <Text>Title</Text>
          </NavBarBody>
          <NavBarRight>
            <NavBarButton onPress={this.handleShowNotification} >
              <Icon name="heart" />
            </NavBarButton>
          </NavBarRight>
        </NavBar>
        <View style={styles.container}>
          <PillView pillHeaders={this.pillHeaders} pillScenes={this.pillScenes} />
          <Notification ref={"alert"} />
          {/* <FloatingButton onPress={this.handleShowNotification} image={require("./assets/images/accessibility.png")} /> */}
        </View>
        <TabBar>
          <TabItem active>
            <Icon name="heart" />
            <Text>Favorites</Text>
          </TabItem>
          <TabItem>
            <Icon name="add" />
            <Text>Add New</Text>
          </TabItem>
          <TabItem>
            <Icon name="camera" />
            <Text>Camera</Text>
          </TabItem>
          <TabItem>
            <Icon name="settings" />
            <Text>Settings</Text>
          </TabItem>
        </TabBar>
        <FloatingButton actions={this.actions} tabs />
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

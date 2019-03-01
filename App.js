/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button, Input, TextArea, Picker, DatePicker, FloatingButton } from "react-native-atom-elements";
import Icon from "react-native-vector-icons/Ionicons";

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
    return (
      <View style={styles.container}>
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
        {/* <FloatingButton onPress={this.handleButtonClick} iconName={"share"}> */}
        <FloatingButton>
          <Button rounded onPress={this.handleButtonClick} color={"#0F0"}>
            <Icon name={"logo-whatsapp"} size={18} />
          </Button>
          <Button rounded onPress={this.handleButtonClick} color={"#00F"}>
            <Icon name={"logo-facebook"} size={18} />
          </Button>
        </FloatingButton>
      </View>
    );
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  }
});

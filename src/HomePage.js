import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Button, FormInput, FormTextArea, FormPicker, FormDatePicker, Text,
    Card, ListItem,
} from "react-native-atom-elements";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pickerValue: 1,
            pickerData: [{ value: "1", label: "1" }, { value: "2", label: "2" }, { value: "3", label: "3" }],
            datePicked: ""
        }
    }

    render() {
        return (
            <View style={styles.innerContainer}>
                <Text size={"h4"} bold >Atom Elements Demo</Text>
                <Button onPress={this.handleButtonClick} block >
                    <Text>Click Me</Text>
                </Button>
                <FormInput onChangeText={this.handleTextChange} label="Name" />
                <FormTextArea color="#0F0" onChangeText={this.handleTextChange} label="Description" />
                <FormPicker color="#00F" onValueChange={this.handleValueChange} selectedValue={this.state.pickerValue} label="Number" data={this.state.pickerData} />
                <FormDatePicker onDateChange={this.handleDateChange} color="#F0F" label="Date" />
                <Card title="Heading" description="Description" image={require("../assets/images/scenery.jpg")} />
                <ListItem title="Heading" description="Description" image={require("../assets/images/scenery.jpg")} >
                    <ListItem title="Heading" onPress={this.handleButtonClick} description="Description" />
                </ListItem>
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
        this.setState({ datePicked: date })
    }

}

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        paddingBottom: 100
    }
});

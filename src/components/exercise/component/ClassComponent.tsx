import React, { Component, useState } from "react";
import { Button, Text } from "react-native";

class Counter extends Component {
    state = {count : 0}

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <>
                <Text>Count {this.state.count}</Text>
                <Button title="increment" onPress={this.increment} />
            </>
        )
    }
}
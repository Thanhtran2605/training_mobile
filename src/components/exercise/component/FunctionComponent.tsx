import React, { Component, useState } from "react";
import { Button, Text } from "react-native";


const Counter = () => {
    const [state, setState] = useState(0);

    return(
        <>
            <Text>Count {state}</Text>
            <Button title={state ? "Counter" : "Uncounter"} onPress={() => {
                setState(state + 1)
            }} />
        </>
    )
}

export default Counter;
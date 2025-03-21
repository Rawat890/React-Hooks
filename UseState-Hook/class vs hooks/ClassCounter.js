import { Button, View, Text } from "react-native"
import React, { Component } from "react"

export default class ClassCounter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  incrementCount = () => {
    console.log(this.state.count)
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
        <Button title="Increment" onPress={this.incrementCount} />
      </View>
    )
  }
}

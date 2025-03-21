import React, { Component, useState } from 'react'
import { Text, View, Button } from 'react-native'

function CountPrev() {

  const [count, setCount] = useState(0);
  function increment(params) {
    setCount(count + 1)
    console.log(count + 1)
  }

  function incrementBy5(params) {
    for (let i = 1; i <= 5; i++) {
      setCount(count + 1)
    }
  }
  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}> {count} </Text>
      <Button title='Reset' onPress={() => setCount(0)} />
      <Button title='Increment' onPress={increment} />
      <Button title='Increment by 5' onPress={incrementBy5} />
      <Button title='Decrement' onPress={() => setCount(count - 1)} />
    </View>
  )

}

export default CountPrev

import React from 'react'
import { Text, View, Image } from 'react-native'

const App = () => {
  return (
  <View>
    <Text> Hello World</Text>
    <Text>XI RPL 2 unyu unyu</Text>
    <Poto/>
  </View>
  )
}

const Poto = () =>{
  return <Image source={{ uri: 'https://picsum.photos/id/237/200/300' }} style={{ width: 150, height: 150 }}/>
}

export default App

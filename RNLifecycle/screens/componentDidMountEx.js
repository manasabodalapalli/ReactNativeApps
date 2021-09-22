import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class componentDidMountMethod extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'This name will change in 5 sec'
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({name: "This is a componentDidMount Method"})
    }, 5000)

  }
  render() {
    return (
      <View style = {styles.container}>
       <Text style={{fontSize:20}}>{this.state.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   justifyContent: 'center', 
   alignItems: 'center'
  }
});
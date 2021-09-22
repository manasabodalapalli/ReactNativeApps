import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class componentDidMountMethod extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(
        (response) => response.json()
    ).then(data => this.setState({data: data}))

  }
  render() {
    return (
      <View style = {styles.container}>
       <Text style={{fontSize:20}}> 
       {
       this.state.data.map((d,key)=> 
       <View key={d.id} style={styles.container}>
       <Text style={{fontSize:20}}>{d.name}</Text>
       </View>)}
       </Text>
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
import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'state :1 '
    }
    console.log("Constructor Called.");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Called.");
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount called.');
  }

 

  shouldComponentUpdate(nextProp, nextState) {
    console.log('shouldComponentUpdate called.');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState.name,this.state.name);
    console.log('getSnapshotBeforeUpdate called.');
    return 999;
  }
  componentDidUpdate() {
    console.log('componentDidUpdate called.');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called.');
  }
 /* componentDidMount() {
    setTimeout(() => {
      this.setState({name: "This is a componentDidMount Method"})
    }, 5000)
    console.log('componentDidMount called.');

  }*/

 
  update = () => {
    this.setState({ name: '**** Update state :2'});
  };

  render() {
    console.log('render called.');
    return (
      <View style = {styles.container}>
       <Text style={{fontSize:20}}>{this.state.name}</Text>
       <TouchableOpacity style={styles.myButton} onPress={this.update}>
          <Text style={styles.buttonText} >update state</Text>
        </TouchableOpacity>
      </View>
      
    )
  }
}



const styles = StyleSheet.create({
  container:{
   flex:1,
   justifyContent: 'center', 
   alignItems: 'center'
  },
  myButton:{
    marginTop:10,
      width: 200,
      height:50,
      backgroundColor:'deepskyblue',
      borderRadius:5,
      alignItems: 'center',  
  },
  buttonText:{
    justifyContent:"center",
    padding: 10,  
          color: 'white',  
          fontSize: 18  
  }


});
import React, { useState ,useEffect} from "react";
import {View,Text,StyleSheet,FlatList,Image,Switch,TouchableOpacity,TextInput} from "react-native";
//import datalist1 from './datalist1';
//import ReadMore from 'react-native-read-more-text';
import { useSelector, useDispatch } from 'react-redux';
import { getAPIData} from '../redux/actions';

 
  const UIScreen = () => {

  const {apidata} = useSelector(state=>state.dataReducer)
    const dispatch = useDispatch();

    const [switchValue, setswitchValue] = useState(false);
    const [switchValue1, setswitchValue1] = useState(false);
    const [data, setData] = useState(apidata);
  
    const filterData = (value) => {
        setswitchValue(value);
       // console.log("filterData Veg : "+value);
        setswitchValue1(false);
        if(value){
          setData(apidata);
            const result  = apidata.filter((item) => item.type == 'Veg').map(({id, title, title1,title2,title3,imguri}) => ({id,title, title1,title2,title3,imguri}));
            setData(result);
          //  console.log("result : "+result.length);
          //  console.log("apidata : "+apidata.length);
          //  console.log("data: "+data.length);
        }else{
            setData(apidata);
        }
      };

      const filterData1 = (value1) => {
        setswitchValue1(value1);
        //console.log("filterData Non-Veg: "+value1);
        setswitchValue(false);
        if(value1){
          setData(apidata);
            const result  = apidata.filter((item) => item.type == 'Non-Veg').map(({id, title, title1,title2,title3,imguri}) => ({id,title, title1,title2,title3,imguri}));
            setData(result);
            //console.log("result : "+result.length);
            //console.log("apidata : "+apidata.length);
           // console.log("data: "+data.length);
        }else{
            setData(apidata);
        }
       
      };

      useEffect(() => {
       
        dispatch(getAPIData());
                console.log('API called')
              // console.log("result : "+result.length);
            console.log("apidata : "+apidata.length);
            console.log("data: "+data.length);
            setData(apidata);
                     }, [JSON.stringify(apidata)]);


        const  renderTruncatedFooter = (handlePress) => {
            return (
              
              <Text style={{color: '#000'}} onPress={handlePress}>
                read more
              </Text>
            );
          }

          const renderRevealedFooter = (handlePress) => {
            return (
              <Text style={{color: '#000'}} onPress={handlePress}>
                show less
              </Text>
            );
          }
    
          const thumbColorOn = Platform.OS === "android" ? "#4a9453" : "#4a9453"
          const thumbColorOff = Platform.OS === "android" ? "#323632": "#4a9453"
          
          const trackColorOn = Platform.OS === "android" ? "#6ded7d" : "#4a9453"
          const trackColorOff = Platform.OS === "android" ? "#a38c8c" : "#f04141"
    return(
    <View style={styles.container}>
        <View style={styles.SectionStyle}>
          <Image
              source={require('../assets/Group9530.png')}
              style={styles.ImageStyle}
          />
          <TextInput
              style={styles.textinput}
              placeholder="Search within the menu..."
              underlineColorAndroid="transparent"
              placeholderTextColor="gray" 
              
          /> 
        </View>
          <View style={styles.switchview}>
            <Switch  style={styles.switchStyle} value={switchValue}  
           thumbColor={switchValue ? thumbColorOn : thumbColorOff}
           trackColor={{ false: trackColorOff, true: trackColorOn }}
                onValueChange={filterData}/>
                 <Text style={styles.foodtype}>Veg</Text>

                 <Switch  style={styles.switchStyle1} value={switchValue1}  
                   thumbColor={switchValue1 ? thumbColorOn : thumbColorOff}
                   trackColor={{ false: trackColorOff, true: trackColorOn }}
                 onValueChange={filterData1}/>
                 <Text style={styles.foodtype}>Non-Veg</Text>
                </View>

                <View style={styles.txtviewrec}>
                        <Text style={styles.title}>Recommended ({data.length})</Text>
                        </View>
          <View style={styles.scrollView}>
          <FlatList
        keyExtractor={(item,key) => item.id}
        data={data}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.svgcontainer}>
          <View style={styles.txtview}>
           <Text style={styles.title}>{item.title}</Text>
           <Text style={styles.title1}>{item.title1}</Text>
           <Text style={styles.title2}>{item.title2}</Text>
           <Text style={styles.title3}>{item.title3}</Text>
          
           </View>     
           <View style={styles.svgview}>
           <Image style={styles.image}source={{uri:item.imguri}}/>
           <TouchableOpacity >
               <Text style={styles.button}>ADD</Text>
                   </TouchableOpacity>
                   <Text style={styles.customtext}>Customisable</Text>
           </View>
       </View>
        )}
/>
            </View>
            </View>     
        );
    }   


    
export default UIScreen;

const styles = StyleSheet.create({
  linetxt: { 
    width:'90%',borderBottomColor: '#F1F2F3', borderBottomWidth: 2,
},
    ImageStyle: {
        padding: 10,margin: 10, height: 20,width: 20, resizeMode: 'stretch',
        alignItems: 'center',
     }, 
     textinput: {
        flex: 1,  color: 'gray',
      },
    SectionStyle: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',borderWidth: 0.5,
        backgroundColor: '#fff', borderColor: '#57585C', height: 50, width:'93%',
         marginTop:30, color: '#000', borderRadius:10, marginLeft:10,
    },  
    card: {
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 3,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        backgroundColor: '#fff',
      },
      cardText: {
        fontSize: 14,
      },
    switchStyle1:{
        marginLeft:10
    },
    customtext: { 
        fontSize: 10, color:'gray',
        
    },
    button: {
        margin:5,
        width:100,
        height:35,
        alignItems: 'center',
        justifyContent:'space-around',
        alignSelf: 'auto',
        borderRadius: 5,    
        fontSize:15,
        textAlign:'center',
        padding:6,
        color:'red',
        borderColor:'red',
        borderWidth:1,
        fontWeight:'bold',
        backgroundColor: '#fff'
      },
    
      scrollView:{
        flex:1,
    },
    scrollcontainer:{
        flex:1,width: '100%' ,paddingBottom:10,
    },
    svgcontainer: {
        height: 200,  borderBottomWidth: 1, flex:2, width:'97%',
        borderColor: '#F1F2F3' ,backgroundColor:'#ffff',
        resizeMode: 'cover',borderRadius:10,marginRight:10,marginLeft:10,
        flexDirection: 'row', padding:5,
    },
    txtview: { 
        flex:2, marginTop:15,
    },
    txtviewrec: { 
        marginTop:10,paddingLeft:5,marginRight:10,marginLeft:10,marginBottom:5
    },

    switchview: { 
        flexDirection: 'row',justifyContent : 'flex-start',
      marginTop:10,marginBottom:5,paddingLeft:5,marginRight:10,marginLeft:10,
    },
    svgview: { 
        flex: 1 , resizeMode: 'cover', alignItems:'flex-start',
        alignItems:'center',justifyContent: 'center', 
   },
    container: {
        flex: 1, backgroundColor:'#ffff',
      },
      foodtype: { 
        fontSize: 15, color:'#000',fontWeight:'bold' ,padding:2
    },
  title: { 
      fontSize: 15, color:'#000',fontWeight:'bold'
  },
  title1: { 
    fontSize: 10, color:'gray',
},
title2: { 
    fontSize: 12, color:'#000',fontWeight:'bold'
},
title3: { 
    fontSize: 12, color:'gray',paddingRight:3
},
  image:{
    height: 100, width: 100, borderRadius:20
  },
  
  })
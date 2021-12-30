import React, { useState ,useEffect} from "react";
import {View,Text,StyleSheet,ScrollView,Image,Switch,TouchableOpacity,TextInput} from "react-native";
import datalist1 from './datalist1';
import ReadMore from 'react-native-read-more-text';


const CardViewEx = () => {

    const [switchValue, setswitchValue] = useState(false);
    const [switchValue1, setswitchValue1] = useState(false);
    const [data, setData] = useState(datalist1);
  
    const filterData = (value) => {
        setswitchValue(value);
        setswitchValue1(false);
        if(value){
            const result  = datalist1.filter((item) => item.type == 'Veg').map(({id, title, title1,title2,title3,imguri}) => ({id,title, title1,title2,title3,imguri}));
            setData(result);
            console.log(result);
        }else{
            setData(datalist1);
        }
      };

      const filterData1 = (value1) => {
        setswitchValue1(value1);
        setswitchValue(false);
        if(value1){
            const result  = datalist1.filter((item) => item.type == 'Non-Veg').map(({id, title, title1,title2,title3,imguri}) => ({id,title, title1,title2,title3,imguri}));
            setData(result);
            console.log(result);
        }else{
            setData(datalist1);
        }
       
      };

      useEffect(() => {
                console.log('Something happened')
               if(switchValue) 
               setswitchValue1(false);
               else
               setswitchValue(false);
        }, [JSON.stringify(data)]);


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
    

    return(
    <View style={styles.container}>
        <View style={styles.SectionStyle}>
          <Image
              source={require('./assets/Group9530.png')}
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
                onValueChange={filterData}/>
                 <Text style={styles.foodtype}>Veg</Text>

                 <Switch  style={styles.switchStyle1} value={switchValue1}  
                 onValueChange={filterData1}/>
                 <Text style={styles.foodtype}>Non-Veg</Text>
                </View>

                <View style={styles.txtviewrec}>
                        <Text style={styles.title}>Recommended ({data.length})</Text>
                        </View>
        <ScrollView 
            showsVerticalScrollIndicator={false}
            pagingEnabled={true}
            style={styles.scrollcontainer}
          >
              {
                    data.map(item=>
                    <View key={item.id} style={styles.svgcontainer}>
                       <View style={styles.txtview}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.title1}>{item.title1}</Text>
                        <Text style={styles.title2}>{item.title2}</Text>
                        <View>
                     <ReadMore numberOfLines={2}
                      renderTruncatedFooter={renderTruncatedFooter}
                      renderRevealedFooter={renderRevealedFooter} >
                        <Text style={styles.title3}>{item.title3}</Text>
                          </ReadMore>
                        </View>
                        </View>     
                        <View style={styles.svgview}>
                        <Image style={styles.image}source={item.imguri}/>
                        <TouchableOpacity >
                            <Text style={styles.button}>ADD</Text>
                                </TouchableOpacity>
                                <Text style={styles.customtext}>Customisable</Text>
                        </View>
                    </View>) 
                }
            </ScrollView>
            </View>     
        );
    }   


    
export default CardViewEx;

const styles = StyleSheet.create({
    ImageStyle: {
        padding: 10,margin: 10, height: 20,width: 20, resizeMode: 'stretch',
        alignItems: 'center',
     }, 
     textinput: {
        flex: 1,  color: 'gray',width:'100%', borderRadius:10
      },
    SectionStyle: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',borderWidth: 0.5,
        backgroundColor: '#FAFDFC', borderColor: '#57585C', height: 50, width:350,
         marginTop:30, color: '#000', borderRadius:10,marginLeft:5,marginRight:10
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
    
    scrollcontainer:{
        flex:1,width: '100%' ,
    },
    svgcontainer: {
        height: 200,  borderBottomWidth: 1, flex:2, width:'100%',
        borderColor: '#F1F2F3' ,backgroundColor:'#ffff',
        resizeMode: 'cover',borderRadius:10,
        flexDirection: 'row', padding:5,
    },
    txtview: { 
        flex:2,marginTop:20,
    },
    txtviewrec: { 
        marginTop:10,paddingLeft:5,
    },

    switchview: { 
        flexDirection: 'row',justifyContent : 'flex-start',
      marginTop:10,marginBottom:5,paddingLeft:5,
    },
    svgview: { 
        flex: 1 , resizeMode: 'cover', alignItems:'flex-start',
        marginTop:10,alignItems:'center',justifyContent: 'center',
   },
    container: {
        flex: 1, marginRight:10,marginLeft:10
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
    fontSize: 12, color:'gray',padding:5
},
  image:{
    height: 100, width: 100, borderRadius:20
  },
  linetxt: { 
    width:'90%',borderBottomColor: '#F1F2F3', borderBottomWidth: 2,
}
  })
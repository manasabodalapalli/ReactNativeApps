import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const Home = () => {
  const [input, setInput] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{margin: 10}}>TextInput with icon</Text>
      /*<TextInput
        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => setInput(text)}
        inlineImageLeft="username"
        inlineImagePadding={2}
        underlineColorAndroid="transparent"
        value={input}
      />*/
    </View>
  );
};

export default Home;
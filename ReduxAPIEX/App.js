
import React from 'react';
import CardViewEx from './screens/CardViewEx';
import UIScreen from './screens/UIScreen';
import {Provider} from 'react-redux';
import store from './redux/store';
 
  function App() {
    
  return (
    <Provider store={store}> 
   <UIScreen></UIScreen>
    </Provider>
  );
}

export default App;




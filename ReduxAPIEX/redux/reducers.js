import { GET_API_DATA } from './actions';
const initialState = {
    apidata:[],
  };

  function  dataReducer (state = initialState, action) {
    switch(action.type) {
      case GET_API_DATA:
        return {...state,apidata:action.payload}
                
      default:
        return state;
    }
  }
  
  export default dataReducer;
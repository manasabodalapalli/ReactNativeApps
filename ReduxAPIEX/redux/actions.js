export const GET_API_DATA = 'GET_API_DATA';

const API_URL= "https://mocki.io/v1/432593d7-c053-4b90-a441-6f3948404e7a";

export const getAPIData = () => {
    try{
        return async dispatch =>{
            const result= await fetch(API_URL,{
                method:'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const json = await result.json();
            if(json){
                console.log('Fetch API Data'+json);
                dispatch({
                    type:GET_API_DATA,
                    payload:json
                });
               
            }else{
                console.log('Unable to fetch data');
            }

        }
    }catch(error){
        console.log(error);
    }
};



export const setName = name => dispatch => {
    dispatch({
        type:SET_USER_NAME,
        payload:name
})
};

export const setAge = name => dispatch => {
    dispatch({
        type:SET_USER_AGE,
        payload:age
})
};
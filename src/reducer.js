
const initialState = {
 text1: "",
 result:[]
};

 const reducer = ( state = initialState, action) => {
     const newState = {...state};
     switch(action.type){
         case 'todoAdd':
         newState.text1 = action.val1;
         break;

         case 'submithandle':
         newState.result.push(newState.text1);
         newState.text1 = "";
         break;
         
         case 'deleteTodo':
         newState.result = newState.result.filter((item,index) => index !== action.val2);
         console.log(newState.result)
         break;

         default: 
         return newState;
     }
     return newState;
    
 }

 export default reducer;
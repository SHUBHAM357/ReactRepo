function amount(state = {defaultState:0,name:'Pending...'},action){

    switch(action.type){
      
       case 'INCREMENT':
           return {defaultState : state.defaultState +1,name:state.name};
       case 'DECREMENT':
           return {defaultState : state.defaultState -1,name:state.name}; 
       default:
           return state;    
    }
  
  }


export default amount
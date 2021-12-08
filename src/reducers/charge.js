function charge(state = {defaultCharge:1},action){

    switch(action.type){
      
       case 'INR':
           return {defaultCharge : 10};
       case 'USD':
           return {defaultCharge : 70}; 
       default:
           return state;    
    }
  
  }


export default charge
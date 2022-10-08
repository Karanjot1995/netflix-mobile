import React,{useReducer} from "react";
import { Text, StyleSheet,View, Image, Button,TextInput,FlatList } from "react-native";
// import {reducer} from './reducer'



// const reducer = (state,action) => {
//   switch(action.type){
//       case 'increase':
//         return {...state, count: state.count + action.payload}
        
//         case 'decrease':
//           return {...state, count: state.count - action.payload}
          
//       default: 
//         return state
      
//   }

// } 


const MoviesScreen = (props) => {
  // const [counter, setCounter,] = useState(0);
//   const val = 1;
//   const [state,dispatch] = useReducer(reducer,{count:0})
//   const {count} = state;
  // console.log(state.name)


    return (
       <View style={styles.incdec}>
        <Text>Movies Page</Text>
        {/* <TextInput  style={{backgroundColor:color}} ></TextInput> */}
      </View>
   
  )
};


const styles = StyleSheet.create({
    text:{
      textAlign:"center"
        // backgroundColor:color
    }
  
})

export default MoviesScreen
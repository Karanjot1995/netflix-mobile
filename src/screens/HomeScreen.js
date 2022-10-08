import React,{useState, useReducer} from "react";
import { Text, StyleSheet, View , Button , TouchableOpacity , TextInput,FlatList} from "react-native";
import List from "../components/common/List";
import Navigation from "../components/Navigation";
// import { useState } from 'react/cjs/react.production.min';
// import ImageScreen from './ImageScreen'
// import ImageDetail from "../components/ImageDetail";
// import Navigation from "../components/Navigation"
// import {reducer} from './reducer'
// import Search from './Search'
const HomeScreen = ({navigation}) => {
  const [state, setState] = useState({name:''})
  // const [state, dispatch]= useReducer(reducer,{name:''})
  const data = [
    {url:"",text:"Forest"},
    {url:"",text:"Beach"},
    {url:"",text:"Mountain"},

  ]
  const [text,setText] = useState('');
  const [pass,setPass] = useState('')

  return(
    <View style={{backgroundColor:'#141414'}}>
      {/* <Navigation navigation={navigation}/> */}
      {/* <View>
        <List navigation={navigation}/>
      </View> */}

      <View style={{padding: 20}}>
        <Text style={{fontSize: 30}}>
          Enter Name: {state.name}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type your name here"
          // onChangeText={(text)=> dispatch({type:'name', text:text})}
          defaultValue={state.name}
        />
        <Text style={{fontSize: 30}}>
          Enter Password: 
        </Text>
        {/* <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter password"
          // onChangeText={pass => setPass(pass)}
          defaultValue={pass}
        />
        <Text>{pass.length>5?'password strength good':'password must be greater than 5 chars'}</Text>
    
         <TouchableOpacity  onPress={()=>navigation.navigate('Components')}>
           <Text style={{fontSize:30, textAlign:"center",backgroundColor:"#e0e0e0"}}>Login</Text>
           </TouchableOpacity>
         */}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    
  },
  input:{
    height: 50,
    fontSize: 25,
    // marginBottom:50,
    borderColor:'#e0e0e0',
    borderWidth:1,
    padding:10
  },
  button: {
    backgroundColor:"#e0e0e0",
    borderColor:"black",
    borderWidth:1,
    borderRadius:10,
    width:"30%",
    margin:5,
    padding:10,
    flexDirection:"row"
  },
  incdec: {
    alignItems: 'center',
  },
  center:{
    textAlign:"center"
  }

});
export default HomeScreen;

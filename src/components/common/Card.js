import React from "react";
import {Image, Text, StyleSheet, View , Button , TouchableOpacity , TextInput,FlatList} from "react-native";


const Card = ({navigation}) => {
  console.log(navigation)
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={()=>navigation.navigate('Movies')}
      >
        <Image 
          style={{width:110, height:150}}
          // source={{uri:props.imgSrc}}
          source={{uri:'https://sportshub.cbsistatic.com/i/2022/01/24/44b557ca-5e4e-49dc-b2b5-c3bbc30d7e0f/fj4h-dvwuaymybt.jpg?auto=webp&width=1000&height=1500&crop=0.667:1,smart'}}

        />
      </TouchableOpacity>
     
    </View>
  )
};

const styles = StyleSheet.create({
    card:{
      padding:5,
    },
    text: {
      fontSize: 20,
      color:'#fff',
    },
    button: {
      backgroundColor:"transparent",
      color:'#fff',
//      border:"none",
    //   width:"30%",
      margin:5,
      flexDirection:"row"
    },
    incdec: {
      alignItems: 'center',
    },
    center:{
      textAlign:"center"
    }
})


export default Card
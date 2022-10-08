import React,{useState} from "react";
import { Text, StyleSheet,View, Image ,TextInput,FlatList, TouchableOpacity} from "react-native";


const Search = ({navigation,pagelist}) => {
    const [query, setQuery] = useState('')
    // console.log('hi',pagelist.map((item)=>item))
    // console.log(query,pagelist)

  return (
      
     <View>
        <View style={styles.search}>

          
           <TextInput style={styles.input}
           placeholder="Enter query"
           onChangeText={query => setQuery(query)}
           defaultValue={query}
        //    onChangeText={(query)=> myFunction(query,pagelist)}
           />
           <Image source={require('../../assets/search.png')}
            style={styles.img}
           />
        </View>
        {/* {pagelist.map((item)=>{
            return <Text onPress={()=>navigation.navigate(item)}>>Go to {item}Demo</Text>
        })} */}

   

      </View>   
    
  )
};
const styles = StyleSheet.create({
    search:{
       flexDirection:'row',
       margin:10,
       backgroundColor:'white',
       borderColor:'black',
       borderRadius:5,
       borderWidth:2
    },
    img:{
        backgroundColor:'white',
        width:30,
        height:35
    },
    input:{
        fontSize:20,
        width:'91%',
        padding:5
    }
})

export default Search
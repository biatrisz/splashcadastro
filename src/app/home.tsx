import {View, Image, TextInput, Text, TouchableOpacity} from "react-native";
import {styles} from "../css/Style";
import {Link} from "expo-router";

export default function Home(){
    return(
        //div principal
        <View style = {styles.imagemBody}>

           <Image style ={styles.imagemss} source= {require('../../assets/sesi-senai.webp')}/>

      </View>
    )
}

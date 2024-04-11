import {View, Image, TextInput, Text, TouchableOpacity} from "react-native";
import {styles} from "../css/Style";
import {Link} from "expo-router";

export default function Home(){
    return(
        //div principal
        <View style = {styles.imagemBody}>

           <Image style ={styles.imagemss} source= {require('../../assets/sesi-senai.webp')}/>

         {/*início do formulário*/}
        <   View style= {styles.form}>

        {/*texto login*/}

        <Text style= {styles.text}>NOME:</Text> 
        <TextInput placeholder="insira seu nome" style = {styles.input}/> 

         <Text style= {styles.text}>CPF:</Text>   
         <TextInput placeholder="insira seu cpf" style = {styles.input}/>

         <Text style= {styles.text}>SENHA:</Text> 
         <TextInput placeholder="insira sua senha" style = {styles.input}/>

      </View> 
      <View style={styles.formbtn}>
        <Link href= {'home'} style = {styles.btn}>cadastrar</Link>
      </View>
      </View>
    )
}

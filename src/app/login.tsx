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
        <Text style= {styles.text}>LOGIN:</Text>    
            
        {/*Input do login*/}
        <TextInput placeholder="insira seu cpf" style = {styles.input}/>

        <Text style = {styles.text}>SENHA</Text>

        <TextInput secureTextEntry placeholder="insira sua senha" style={styles.input}/>

        <View style = {styles.subBtn}>
            <TouchableOpacity><Link href={'cadastro'} style={styles.subBtn}>cadastrar</Link></TouchableOpacity>
            <TouchableOpacity><Link href={'home'} style={styles.subBtn1}>esqueci a senha</Link></TouchableOpacity>
        </View>
      </View> 
      <View style={styles.formbtn}>
        <Link href= {'home'} style = {styles.btn}>ENTRAR</Link>
      </View>
      </View>
    )
}

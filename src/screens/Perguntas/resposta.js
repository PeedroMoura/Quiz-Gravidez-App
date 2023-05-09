import {
  Text,
  View,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { qz } from "./../../assets/quiz-logo.png";
import {
  getFirestore,
  getDoc,
  doc,
  getDocs,
  collection,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function TelaResposta({correta, avancar}) {

    const buscarImagem = (imagem) => {
        if (imagem == '1') return require(`./../../assets/Imagens-resposta/imagem-resposta1.png`)
        if (imagem == '2') return require('./../../assets/Imagens-resposta/imagem-resposta2.png')
    }


  return (
    <View style={styles.viewPrincipal}>
      <Image
        source={require("./../../assets/quiz-logo.png")}
        style={{ width: "80%", height: 100, resizeMode: "contain" }}
      ></Image>
      <Text style={{color:'white', fontSize:16, marginTop:50}}>Resposta correta:</Text>
      <Text style={{fontSize:55, color:'white', marginTop:10}}>{correta.resposta_correta}!</Text>
      <View style={{backgroundColor:'white', height:1,width:90, marginTop:8, borderRadius:2}} />
      <Text style={{color:'white', fontSize:16,marginTop:20, textAlign:'justify', marginHorizontal:20}}>{correta.explicacao}</Text>
      <Image source={buscarImagem(correta.imagem_url)} 
             style={{ width: "80%", height: 180, resizeMode: "contain", marginTop:20 }}/>
      <View style={{marginTop:30}}>
      <Button title="Proxima pergunta" onPress={avancar} ></Button>
      </View>
    </View>
  );
}

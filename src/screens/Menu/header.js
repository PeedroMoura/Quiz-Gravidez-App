import { ImageBackground, Image, Text, View } from "react-native";
import bg from "./../../assets/background-image-top.png";
import rt from "./../../assets/quiz-retangulo-start.png";
import qz from "./../../assets/quiz-logo1.png";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


export function Header() {

    const nav = useNavigation();

  return (
    <ImageBackground source={bg} style={{ width: "100%", height: 300,  flex:1}}>
      <View style={styles.viewHeaderContainer}>
      <Image source={qz} style={{ width: "100%", height:150, resizeMode: "contain", marginTop: 50}}></Image>
      </View>

      <View style={{alignItems:'center', marginTop:70}}>
      <Text style={{ color: "black", fontSize: 40, marginTop:10 }}>Bem-vinda!</Text>
        <Text style={{ color: "black", fontSize: 18, textAlign:'center', marginTop:30 }}>Vamos conversar um pouco sobre o pré-natal odontológico?</Text>
        <Text style={{ color: "black", fontSize: 18, textAlign:'center', marginLeft:15, marginRight:15, marginTop:30   }}>Venha esclarecer suas dúvidas e aprender a cuidar da sua saúde bucal e do seu bebê.</Text>
      </View>

      <TouchableOpacity style={{alignItems: "center", marginTop:50}} onPress={() => nav.navigate('perguntas') } > 
        <Image source={rt}style={{ width: "100%", height: 90, resizeMode: "contain" }}></Image>
      </TouchableOpacity>


    </ImageBackground>
  );
}

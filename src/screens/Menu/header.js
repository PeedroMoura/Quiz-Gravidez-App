import { ImageBackground, Image, Text, View } from "react-native";
import bg from "./../../assets/background-image-top.png";
import rt from "./../../assets/quiz-retangulo-start.png";
import qz from "./../../assets/quiz-logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

export function Header() {
  return (
    <ImageBackground source={bg} style={{ width: "100%", height: 300,  flex:1 }}>
      <View style={styles.viewHeaderContainer}>
        <View style={styles.viewHeaderImageContainer}>
          <View style={styles.viewCircleContainer}></View>
          <View style={styles.viewNameContainer}>
            <Text style={styles.textHeaderContainer}>NOME DO USUARIO</Text>
            <Text style={styles.textHeaderContainer}>Sobre nome??</Text>
          </View>
        </View>
        <View style={styles.viewIconContainer}>
          <MaterialIcons name="exit-to-app" size={30} color="white" />
        </View>
      </View>

      <View style={{alignItems: "center", marginTop:230}}>
        <Image source={rt} style={{ width: "100%", height: 90, resizeMode: "contain" }}></Image>
        <Image source={qz} style={{ width: "100%", height:130, resizeMode: "contain", marginTop: 100}}></Image>
      </View>

    </ImageBackground>
  );
}

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

export default function TelaPerguntas() {
  const [perguntaNumero, setPerguntaNumero] = useState(1);
  const [pergunta, setPergunta] = useState();
  const [alternativas, setAlternativas] = useState([]);
  const db = getFirestore();

  // ===============================================================================
  const buscarPergunta = async () => {
    try {
      const resultado = await getDoc(
        doc(db, "perguntas", perguntaNumero.toString())
      );

      if (resultado.exists()) {
        setPergunta(resultado.data());

        const resultadoAlternativa = await getDocs(
          collection(db, `perguntas/${perguntaNumero}/alternativas`)
        );

        const novasAlternativas = [];
        if (resultadoAlternativa.docs.length > 0) {
          const alternativasDB = resultadoAlternativa.docs[0].data();

          Object.keys(alternativasDB).forEach((letra) => {
            novasAlternativas.push({ letra, descricao: alternativasDB[letra] });
          });
        }
        setAlternativas(novasAlternativas);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    buscarPergunta();
  }, []);

  return (
    <View style={styles.viewPrincipal}>
      <Image
        source={require("./../../assets/quiz-logo.png")}
        style={{ width: "80%", height: 100, resizeMode: "contain" }}
      ></Image>

      <View style={styles.viewPergunta}>
        <Text style={{ color: "white", fontSize: 14 }}>
          Questão {perguntaNumero}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            paddingTop: 20,
            textAlign: "center",
            paddingHorizontal: 5,
          }}
        >
          {pergunta && pergunta.titulo}
        </Text>
      </View>

      <View style={{ justifyContent: "space-between" }}>
        <FlatList
          data={alternativas}
          keyExtractor={(item) => item.letra}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.viewAlternativa}>
                <Text style={styles.viewAlternativaText}>{item.descricao}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* <View style={styles.buttonContent}>
        <Button title="Voltar" color={"#A193BE"}></Button>
      </View> */}
    </View>
  );
}

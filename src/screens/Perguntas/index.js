import { Text, View, Image, Button, FlatList } from "react-native";
import { styles } from "./styles";
import { qz } from "./../../assets/quiz-logo.png";
import { getFirestore, getDoc, doc, getDocs, collection }  from 'firebase/firestore';
import { useEffect, useState } from "react";


export default function TelaPerguntas() {


  const perguntaNumero = 1;
  const [ pergunta, setPergunta ] = useState();
  const [ alternativas, setAlternativas ] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    (async () => {
      console.log('AAAA')
      try {
        const resultado = await getDoc(doc(db, 'perguntas', perguntaNumero))

      } catch (e) {
        console.log(e)
      }

      // if (resultado.exists()) {
      //   setPergunta(resultado.data())
      //   const resultadoAlternativa = await getDocs(collection(db, `perguntas/${perguntaNumero}/alternativas`))
        
      //   if (resultadoAlternativa.exists()) {
      //     const alternativas = []
      //     const alternativasDB = resultadoAlternativa[0].data();
      //     Object.keys(alternativasDB).forEach(letra => {
      //       alternativas.push([{letra, descricao: alternativasDB[letra]}])
      //     })

      //   }
      //   setAlternativas(alternativas)
      // }

    })()

  }, [])

  
  return (
    <View style={styles.viewPrincipal}>
      <Image
        source={require("./../../assets/quiz-logo.png")}
        style={{ width: "80%", height: 100, resizeMode: "contain" }}
      ></Image>

      <View style={styles.viewPergunta}>
        <Text style={{ color: "white", fontSize: 14 }}>Questão {perguntaNumero}</Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            paddingTop: 20,
            textAlign: "center",
            paddingHorizontal: 5,
          }}
        >
          { pergunta && pergunta.titulo}
          {/* Você foi a consulta com o dentista durante o periodo de gravidez? */}
        </Text>
      </View>

      <View style={{ justifyContent: "space-between" }}>
        <FlatList
          data={alternativas}
          renderItem={({item}) => (
            <View style={styles.viewAlternativa}>
              <Text style={styles.viewAlternativaText}>{item.descricao}</Text>
            </View>
          )}
        />
      
      </View>

          {/* <View style={styles.buttonContent}>
          <Button title="Voltar"color={"#A193BE"} ></Button>
          </View> */}

    </View>
  );
}

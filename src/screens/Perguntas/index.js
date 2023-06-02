import {
  Text,
  View,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { qz } from "./../../assets/quiz-logo1.png";
import {
  getFirestore,
  getDoc,
  doc,
  getDocs,
  collection,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import TelaResposta from "./resposta";
import { useNavigation } from '@react-navigation/native'

export default function TelaPerguntas() {
  const navigation = useNavigation();
  const [perguntaNumero, setPerguntaNumero] = useState(0);
  const [ telaResposta, setTelaResposta ] = useState(false);
  const [pergunta, setPergunta] = useState();
  const [perguntas, setPerguntas] = useState([]);
  const [alternativas, setAlternativas] = useState([]);
  const db = getFirestore();


  // ===============================================================================
  const buscarPerguntas = async () => {
    await getDocs(collection(db, 'perguntas'))
    .then(async snapshots => {
      
        let dados = []  
          for(let i = 0; i < snapshots.docs.length; i++) {

            const doc = snapshots.docs[i];
          
            const resultadoAlternativa = await getDocs(
              collection(db, `perguntas/${doc.id}/alternativas`)
            );

            const alternativas = [];
            if (resultadoAlternativa.docs.length > 0) {
              const alternativasDB = resultadoAlternativa.docs[0].data();
    
              Object.keys(alternativasDB).forEach((letra) => {
                alternativas.push({ letra, descricao: alternativasDB[letra] });
              });
            }
            const data = doc.data()
            dados.push({...data, alternativas})
          }
          setPerguntas(dados);
        })
  }
  

  const buscarPergunta = async (perguntaNumero) => {
    try {

      console.log(perguntaNumero);
      console.log(perguntas);
      if (perguntas[perguntaNumero]) {
        setPergunta(perguntas[perguntaNumero]);
        setAlternativas(perguntas[perguntaNumero].alternativas);
      } else {
        navigation.navigate('telaPrincipal');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const selecionarAlternativa = (letra) => {
    setTelaResposta(true);
  }

  const avancar = () => {
    console.log('aaaaaaaaaaaaaaaaaaaaaa')
    buscarPergunta(perguntaNumero+1)
    setTelaResposta(false)
    setPerguntaNumero(perguntaNumero+1)
  }


  useEffect(() => {
    (async () => {
      await buscarPerguntas();
    })()
  }, []);

  useEffect(() => {
    if (perguntas.length > 0)
     buscarPergunta(perguntaNumero);
  }, [perguntas])

  return (
    <>
    {  !telaResposta && (<View style={styles.viewPrincipal}>
      {/* <Image
        source={require("./../../assets/quiz-logo.png")}
        style={{ width: "80%", height: 100, resizeMode: "contain" }}
      ></Image> */}

      <View style={styles.viewPergunta}>  
        <Text style={{ color: "white", fontSize: 14 }}>
          Questão {perguntaNumero+1}
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
            <TouchableOpacity onPress={() => selecionarAlternativa(item.letra)}>
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
    </View>)}
    { (pergunta && telaResposta) && <TelaResposta correta={pergunta.correta} avancar={avancar} />}
    
    </>
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaMenu from './src/screens/Menu';
import { initializeApp } from "@firebase/app";
import firebaseConfig from './src/config/firebase';
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import { useEffect } from 'react';
import { NavegacaoPrinciapl } from './src/navigations';
import TelaPerguntas from './src/screens/Perguntas';
import TelaResposta from './src/screens/Perguntas/resposta';


export default function App() {

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();


  // console.log('BBBBBBBBBBBBB')
  // const docRef = doc(db, "perguntas", "1");
  // getDoc(docRef).then(snapDoc => {
  //   console.log(snapDoc.data())
  // })
   
  

  return (
    <View style={{flex:1}}>
      <NavegacaoPrinciapl/>
      {/* <TelaMenu/> */}
      {/* <TelaPerguntas/> */}
      {/* <TelaResposta/> */}
    </View>
  )
}

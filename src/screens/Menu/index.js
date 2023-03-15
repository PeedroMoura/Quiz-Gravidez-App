import { Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "./header";

export default function TelaMenu (){

    return(
        <View style={styles.backgroundcontainer}>
            {/* HEADER */}
            <Header />
            {/* HEADER FIM */}
        </View>
    )
} 


import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backgroundcontainer: {
        backgroundColor: 'white',
        flex: 1
    },

    viewCircleContainer: {
        backgroundColor: 'white',
        height:110,
        width: 110,
        marginTop: 50,
        marginLeft: 20,
        borderRadius: 65,
    },

    viewHeaderContainer: {
        alignItems:'center',
        marginTop:30,
    },

    viewHeaderImageContainer:{
        flexDirection:'row',
    },

    viewNameContainer:{
        marginTop:40,
        marginLeft:10,
        justifyContent:'center',
    },

    textHeaderContainer:{
        color:'white',
    },

    viewIconContainer:{
        justifyContent:'center',
        marginTop:40,
        marginLeft:50,
    }

})
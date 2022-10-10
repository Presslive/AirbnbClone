import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        margin:20,

    },
    textInput: {
        fontSize:18,
        marginBottom:20,
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:15,
        borderBottomWidth:1,
        borderColor:"lightgrey",
    },
    iconContainer:{
        backgroundColor:'#CFD4D7',
        padding:6,
        borderRadius:10,
        marginRight: 15,
    },

    locationText:{
        fontWeight:'400',
    },
});

export default styles;
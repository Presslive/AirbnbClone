import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    row:{
        flexDirection:'row',
         justifyContent:'space-between',
         marginHorizontal:20,
         paddingVertical:20,
         borderBottomWidth:1,
         borderColor:'lightgrey'},

    button: {
        borderWidth: 1,
        width:30,
        height:30,
        borderRadius: 15,
        borderColor: 'lightgray',
        justifyContent:'center',
        alignItems: 'center',
    }

});

export default styles;
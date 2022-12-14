import { StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    imageWrapper: {
        
        width: "100%",
        overflow : "hidden"
    },
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
        
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft:25,
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        marginLeft: 25,
        marginTop: 25,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttontext: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchButton: {
        backgroundColor: '#fff',
        width:Dimensions.get('screen').width - 20,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute",
        top: 50,
        zIndex: 100,

    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    

});

export default styles;
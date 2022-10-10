
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
        
    },
    image: {
        width:'100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    description: {
        fontSize:18,
        lineHeight: 26,
    },
    bedrooms: {
        marginVertical:8,
        color: '#5b5b5b',
    },
    prices: {
        fontSize: 18,
        marginVertical: 6,

    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',

    },
    newPrice: {
        fontWeight: 'bold',

    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    },
})

export default styles;
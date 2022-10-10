import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles.js';

const Post = (props) => {
    return(
        <View style={styles.container}>
                {/**Image */}
                <Image style={styles.image}
                source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}>

                </Image>
                {/**Bed & bedroom */}
                <Text style={styles.bedrooms}>
                    1 bed 1 bedroom
                </Text>

                {/**Type & Description */}
                <Text style={styles.description}  numberOfLines={2}>
                    Lorem ipsum dolor sit amet, consectetur 
                 fadipiscing elit, sed do eiusmod tempor incididunt
                 gravida dictum fusce ut placerat orci.
                 </Text>

                {/**Old Price & New price */}
                <Text style={styles.prices}>
                    <Text style={styles.oldPrice}>$36</Text>
                    <Text style={styles.newPrice}> $30 </Text>
                    / night
                </Text>

                {/**Total price */}
                <Text style={styles.totalPrice}>$230 total</Text>

        </View>
    )
}



export default Post;
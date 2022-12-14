import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles.js';

const Post = (props) => {

        const post = props.post;
    
    return(
        
        <View style={styles.container}>
                {/**Image */}
                <Image style={styles.image}
                source={{uri: post.image}}>

                </Image>
                {/**Bed & bedroom */}
                <Text style={styles.bedrooms}>
                    {post.bed} bed {post.bedroom} bedroom
                </Text>

                {/**Type & Description */}
                <Text style={styles.description}  numberOfLines={2}>
                  {post.type}. {post.title}
                 </Text>

                {/**Old Price & New price */}
                <Text style={styles.prices}>
                    <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                    <Text style={styles.newPrice}> ${post.newPrice} </Text>
                    / night
                </Text>

                {/**Total price */}
                <Text style={styles.totalPrice}>${post.totalPrice}</Text>

        </View>
    )
}



export default Post;
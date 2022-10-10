import Reac, {useState} from "react";
import { View, TextInput, FlatList, Text} from "react-native";
import styles from "./styles";
import  search  from "../../../assets/data/search";
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationLocation = (props) => {
    const [inputText, setInputtext] = useState("");
    return(
        <View style={styles.container}>
            {/*imput component */}

            <TextInput 
            style={styles.textInput}
            placeholder= "Where are you going ?"
            value={inputText}
            onChangeText={setInputtext}/>

            {/*list of sestination*/}
            <FlatList
            data={search}
            renderItem={({item}) => (
             <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Entypo name={"location-pin"} size={30} />
                 </View>
                <Text style={styles.locationText}>{item.description}</Text>

             </View>
            )}
            />

        </View>
    )
}

export default DestinationLocation
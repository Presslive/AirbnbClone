import React, {useState} from "react";
import { View, TextInput, FlatList, Text, Pressable} from "react-native";
import styles from "./styles";
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

const GuestScreen =(props) => {
    const [adults, setAdults]= useState(0);
    const [childrens, setChildrens]= useState(0);
    const [infants, setInfants]= useState(0);

    const navigation = useNavigation();
    return(
        <View style={{justifyContent: 'space-between', height:'100%'}}>
            {/**Row adults */}
        <View>

            <View style={styles.row}>
            {/**titles*/}
            <View>
                <Text style={{fontWeight:'bold'}}>Adults</Text>
                <Text style={{color:'#8d8d8d'}}>Ages 13 or above</Text>

                </View>
            {/**Buttons with value */}
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable
                     onPress={() => setAdults(Math.max(0, adults - 1))}
                    style={styles.button} 
                    >
                    <Text style={{fontSize:21, color:'#474747'}}>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal:20, fontSize:17}}>{adults}</Text>
                    <Pressable
                     onPress={() => setAdults( adults + 1)}
                    style={styles.button} 
                    >
                    <Text style={{fontSize:20, color:'#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.row}>
            {/**titles*/}
            <View>
                <Text style={{fontWeight:'bold'}}>Children</Text>
                <Text style={{color:'#8d8d8d'}}>Ages 2-12</Text>

                </View>
            {/**Buttons with value */}
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable
                     onPress={() => setChildrens(Math.max(0, childrens - 1))}
                    style={styles.button} 
                    >
                    <Text style={{fontSize:21, color:'#474747'}}>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal:20, fontSize:17}}>{childrens}</Text>
                    <Pressable
                     onPress={() => setChildrens( childrens + 1)}
                    style={styles.button} 
                    >
                    <Text style={{fontSize:20, color:'#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.row}>
            {/**titles*/}
            <View>
                <Text style={{fontWeight:'bold'}}>Infants</Text>
                <Text style={{color:'#8d8d8d'}}>Under 2</Text>

                </View>
            {/**Buttons with value */}
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable
                     onPress={() => setInfants(Math.max(0, infants - 1))}
                    style={styles.button} 
                    >
                    <Text style={{fontSize:21, color:'#474747'}}>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal:20, fontSize:17}}>{infants}</Text>
                    <Pressable
                     onPress={() => setInfants( infants + 1)}
                    style={styles.button} 
                    >
                    <Text style={{fontSize:20, color:'#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
            
                <Pressable onPress={() => navigation.navigate('')} style={{
                    marginBottom:20,
                    backgroundColor:'#f15454',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height:50,
                    marginHorizontal: 20,
                    borderRadius: 10 }}>
                    <Text style={{
                        fontSize: 20, 
                        color: 'white',
                        fontWeight: 'bold'
                        }}>Search</Text>
                </Pressable>
            
        </View>
    )
}

export default GuestScreen;
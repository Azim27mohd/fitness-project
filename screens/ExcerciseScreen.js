import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView,} from 'react-native'
import React, { useContext } from 'react' 
import { FitnessItems } from "../Context";
import { useNavigation, useRoute, } from "@react-navigation/native";

const ExcerciseScreen = () => {
  const navigation = useNavigation();
    const route = useRoute();
    //console.log(route.params)
    const {
      completed,
      setCompleted,
    } = useContext(FitnessItems);
  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false}
    style={{backgroundColor: "white",}}>
      <Image style={{width: '100%', height: 170}} source={{uri:route.params.image}}></Image>
      
      {route.params.excersises.map((item, index) => (
          <Pressable style={{ margin: 10, flexDirection: "row", alignItems: "center" }}key={index}>
            <Image style={{width:90, height:90}}  source={{uri:item.image}}></Image>
            <View style={{marginLeft:10}}>
                <Text style={{ fontSize: 17, fontWeight: "bold",width:170, }}>{item.name}</Text>
                <Text style={{ marginTop: 4, fontSize: 18, color: "gray" }}>x{item.sets}</Text>
            </View>

          </Pressable>
      ))}
      </ScrollView>

      <Pressable 
      onPress={() => {
        navigation.navigate("Fit",{
        excersises:route.params.excersises,
      })
      setCompleted([]);
      }}
      style={{
        backgroundColor: "#075eec",
         padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          width:120,
          borderRadius:6,
      }}>
        <Text  style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "600",
          }}
          >START
          </Text>
      </Pressable>
      </>
     );
     };
   

export default ExcerciseScreen

const styles = StyleSheet.create({});


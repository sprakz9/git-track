import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  FlatList ,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';



const HomeScreen = () => {

  const [my_height, setmy_height] = useState("");
  const [my_base, setmy_base] = useState("");
  const [my_area, setArea] = useState<number | null>(null);
  
  const CalculatorArea = () => {
    const Base_Float = parseFloat(my_base);
    const Heiht_Float = parseFloat(my_height);
      if(Base_Float != null|| Heiht_Float != null) {
        const calculatedArea = (Base_Float * Heiht_Float) /2
        setArea(calculatedArea);
      }else{
        setArea(null)
      }
  }
    

  return (
    <SafeAreaView style={styles.container}>
    <>
      <View style={styles.viewCenter}>
        <Text style={styles.textStyleCenter}>คำนวณพื้นที่สามเหลี่ยม</Text>
      </View>
      
      <View style = {styles.inputContainer}>
      <TextInput
          style={styles.input}
          onChangeText={setmy_base}
          value={my_base}
          placeholder="ความยาวฐาน : "
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setmy_height}
          value={my_height}
          placeholder="ความยาวสูง : "
          keyboardType="numeric"
        />
      </View>

      <View style = {{marginTop : 15}}>
        <Button title='คำนวณ' onPress={CalculatorArea}
        />
      </View>

      <View style = {styles.viewCenter}>
        <Text style = {styles.textStyleCenter}>พื้นที่เท่ากับ : {my_area}</Text>
      </View>
    </>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  textStyleCenter: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  viewCenter: {
    alignItems: 'center',
    marginTop: 14,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin : 5
  },
  container: {
    flex: 1,
    alignContent: 'center',
    marginHorizontal: 30,
    marginTop : 10
  },
  inputContainer: {
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});




export default HomeScreen;

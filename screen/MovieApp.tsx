import { View, Text, StyleSheet , SafeAreaView , 
      Image, ScrollView , FlatList, Pressable, Alert,
      Touchable,TouchableHighlight, 
      Button,
      TouchableOpacity, 
    } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import moviesData from "./movies-250.json"
import MovieDetail from './MovieDetail';


  

const MovieApp = () => {

  const navigation: any = useNavigation();
  const movies = moviesData.movies;

  const PressDetail = (
    Title : string , 
    Year : string , 
    Rated : string , 
    Genre : string ,
    Runtime : string ,
    Plot : string , 
    Poster : string , 
    Released : string
  ) => {
    navigation.navigate('MovieDetail', {Title , Year , Rated , Genre , Runtime , Plot , Poster , Released})
    // Alert.alert(id)
  }

  return (
    <>
      <View>
        <Text style={styles.textStyleHeader}>     ภาพยนตร์ทั้งหมด</Text>
      </View>
    <SafeAreaView style={styles.container}>
                <View>
                  <FlatList
                    data = {movies}
                    renderItem={({item}) => (
                        <View style = {styles.movieContainer}>
                          <Pressable onPress={() => PressDetail(
                            item.Title , 
                            item.Year , 
                            item.Rated , 
                            item.Genre , 
                            item.Runtime , 
                            item.Plot , 
                            item.Poster , 
                            item.Released
                            )}>
                          <Image 
                          source={{uri : item.Poster}} 
                          style={styles.poster}
                          resizeMode="cover"
                          />
                          </Pressable>
                              <Text style={styles.title}>{item.Title}</Text>
                              <Text style={styles.year}>{item.Year}</Text>
                              <Text style = {styles.year}>Language : {item.Language}</Text>
                        </View>
                    )
                  }
                    keyExtractor={(item, index) => index.toString()} // ใช้ index เป็น key
                    numColumns={2}
                  />
                </View>

                    <View>
                        <TouchableOpacity style = {{
                            backgroundColor: '#007BFF',
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            borderRadius: 5,
                          }}>
                            <Text style = {{
                              color : "white" , 
                              fontSize : 16,
                              textAlign : "center"
                            }}>TEST BUTTON and git hihi</Text>
                        </TouchableOpacity>
                    </View>
                
        </SafeAreaView>

    
    </>
  )
}

const styles = StyleSheet.create({
    textStyleHeader: {
        color: '#288BCE',
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical : 3,
        marginTop : 8
    },
    poster: {
      width: 150,
      height: 180,
      borderRadius: 10,
    },
    textMoiveContent : {
      fontSize : 18,
    },
    movieContainer: {
      flex: 1,
      margin: 10,
      backgroundColor: '#3E4950',
      borderRadius: 15,
      padding: 6,
      marginTop : 0
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color : "#FFFFFF",
      marginTop : 6,
    },
    year: {
      fontSize: 14,
      color: 'white',
    },
    scrollView: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#eaeaea',
    },
    
})

export default MovieApp
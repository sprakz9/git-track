import { View, Text, StyleSheet , Image , ImageBackground, Platform } from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';

// Define the type for the route parameters
type RootStackParamList = {
  MovieDetail: { 
    Title : string , 
    Year : string , 
    Rated : string , 
    Genre : string ,
    Runtime : string ,
    Plot : string , 
    Poster : string , 
    Released : string
  };
};

// Define the type for the route prop
type MovieDetailRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

const MovieDetail = () => {
  const route = useRoute<MovieDetailRouteProp>();
  const { Title , Year , Rated , Genre , Runtime , Plot , Poster , Released} = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: Poster }}
        style={styles.background}
        resizeMode="cover"
      >
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
        <View style={styles.posterContainer}>
          <Image
            source={{ uri: Poster }}
            style={styles.poster}
          />
        </View>
        
        <View style={[styles.infoContainer]}>
          <Text style={styles.title_main}>{Title}</Text>
          <Text style={styles.subtitle}>{Genre}
          <Text> | Rate :  {Rated}</Text>
          </Text>

          <View style = {[styles.row , {margin : 10}]}>
          <Text style={[styles.fontColor]}>วันที่เริ่มฉาย{"\n"}
              <Text style={{ fontWeight: 'bold', color: '#ffd700' }}>{Released}</Text>
          </Text>

          <Text style={[styles.fontColor]}>ความยาวหนัง{"\n"}
              <Text style={{ fontWeight: 'bold', color: '#ffd700' }}>{Runtime}</Text>
          </Text>
          </View>

          <View>
            <Text style = {{fontSize : 25 , color : "white" , fontWeight : 'bold'}}>เรื่องย่อ</Text>
            <Text style = {{fontSize : 18 , color : "#9A9C9D"}}>{Plot}</Text>
          </View>



        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: '100%',
    width: '100%',
  },
  posterContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
    marginTop: 6,
    padding: 10,
  },
  title_main: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    color: 'white',
  },
  fontColor: {
    color: 'white',
    fontSize : 18 ,
    textAlign : "center"
  } , 
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default MovieDetail;

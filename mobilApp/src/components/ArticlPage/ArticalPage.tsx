import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight, ImageBackground } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { useNavigation } from '@react-navigation/native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { getDangerosThunk } from '../../features/actions/dangerosAction';
import { getArticleThunk } from '../../features/actions';

import backgroundImage from '../Images/phonepic.png'

type RootStackParamList = {
  OnePost: { id: number; idCountry: number };
};

type OnePostRouteProp = RouteProp<RootStackParamList, 'OnePost'>;
export default function ArticalPage() {
  const article = useAppSelector((state) => state.sliceData.article);
  const dispatch = useAppDispatch();

  const route = useRoute<OnePostRouteProp>();

  const { id } = route.params;

  useEffect(() => {
    dispatch(getArticleThunk(id)).catch((err) => console.log(err));
  }, []);
console.log(article);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
          <View style={styles.card2}>
        <View style={styles.card}>
          <Text style={styles.article1}>{article.name}</Text>
          <Text style={styles.article}>{article.article}</Text>
        </View>  
    </View>
    </ImageBackground>

  );
}
const styles = {
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width : 350,
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  article: {
    fontFamily: 'Arial',
    fontWeight: 'normal',
    fontSize: 20,
    // justifyContent: 'spase-between',
    alignItems: 'center',
    marginBottom: 5,
    color: 'black',
  },
  article1: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
    color: 'black',
  },
  card2: {
    marginLeft: 20,
  },
};

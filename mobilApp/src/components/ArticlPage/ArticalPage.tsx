import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { useNavigation } from '@react-navigation/native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { getDangerosThunk } from '../../features/actions/dangerosAction';
import { getArticleThunk } from '../../features/actions';

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
    <View>
      
        <View style={styles.card}>
          <Text style={styles.title}>{article.name}</Text>
          <Text>{article.article}</Text>
        </View>
     
    </View>
  );
}
const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
};

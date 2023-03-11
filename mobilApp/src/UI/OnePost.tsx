/* eslint-disable react/require-default-props */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useAppDispatch } from '../features/reduxHooks';
import { addToFavorites, deleteFromFavorites } from '../features/slices';
import { PostType } from '../types';

import { Button } from 'react-native-elements';

type OnePostProps = {
  post: PostType;
  url?: string;
};

export default function OnePost({ post, url }: OnePostProps): JSX.Element {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const addToFavoritesHandler = (): void => {
    // dispatch(addToFavorites(post));
    if (post) {
      console.log(post.id)
      const id = post.id
      navigation.navigate('Home', {  id });
      
    } else {
      // Обработка ошибки, если объект "post" не существует
      console.log("errorrrr")
    }
  };

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: `https://api.opendota.com${post.img}` }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardText}>
          {post.name}
        </Text>
        <Text style={styles.cardText}>
          {post.attack_range}
        </Text>
        <Text style={styles.cardText}>
          {post.base_health}
        </Text>
        <Text style={styles.cardText}>
          {post.move_speed}
        </Text>
      </View>
      <Button onPress={addToFavoritesHandler} title="ЗВЕЗDA" buttonStyle={styles.cardButton} />
      {url && (
        <Button
          onPress={() => dispatch(deleteFromFavorites(post.id))}
          title="x"
          buttonStyle={styles.cardButton}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardContent: {
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    borderRadius: 20,
  },
});
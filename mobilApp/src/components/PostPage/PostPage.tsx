import React, { useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { getPostsThunk } from '../../features/actions';

import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import OnePost from '../../UI/OnePost';

export default function PostPage():JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsThunk()).catch((err) => console.log(err));
  },[]);

  const posts = useAppSelector((state:any)=> state.postsData.posts)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {posts.map((el:any)=> <OnePost post={el}  key={el.id}/>)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: '#F8F8F8',
  },
})

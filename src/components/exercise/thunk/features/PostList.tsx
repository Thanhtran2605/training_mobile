import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useAppDispatch, useAppSelector } from '../type/hook';
import { fetchPosts, selectAllPosts, selectStatus } from './postsSlice';

const PostList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status]);

  if (status === 'loading') return <ActivityIndicator size="large" />;
  if (status === 'failed') return <Text>Error loading posts.</Text>;
  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
    />
  );
};

export default PostList;

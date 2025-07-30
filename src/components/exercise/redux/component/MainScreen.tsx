import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../slices/countSlice';
import type { RootState } from '../store/store';

export default function MainScreen() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Giá trị: {count}</Text>

      <Button title="Tăng" onPress={() => dispatch(increment())} />
      <Button title="Giảm" onPress={() => dispatch(decrement())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
    </View>
  );
}
    
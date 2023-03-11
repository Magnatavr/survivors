import React from 'react';
import { View, Text, Button } from 'react-native';

type MainProps = {
  onPressEnter: () => void;
};

const Main = ({ onPressEnter }: MainProps) => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>SURVIVOR</Text>
      <Button title="Enter" onPress={onPressEnter} />
    </View>
  );
};

export default Main;

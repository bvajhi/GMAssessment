import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import { changeCount } from './actions/count'
function App() {
  const dispatch = useDispatch();
  const count = useSelector (state => state.count.count);
  return (
    <>
      <SafeAreaView>
      <Text>
        {count}
      </Text>
      <Button 
        title="increase count" 
        onPress= {() => { dispatch(changeCount(count+1)) }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;

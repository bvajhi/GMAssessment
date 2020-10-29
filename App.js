import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
} from 'react-native';

import { getCurrentRepoCommits } from './api/api';
import {getData} from './actions/apiActions';

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

      <Button 
        title="Make API call" 
        onPress= {() => { dispatch(getData())}}
      />
      
      </SafeAreaView>
    </>
  );
};

export default App;

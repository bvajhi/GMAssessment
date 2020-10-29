import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
} from 'react-native';

import {getData, setIsLoading} from './actions/apiActions';

import {useDispatch, useSelector} from 'react-redux';

import { changeCount } from './actions/count'
function App() {
  const dispatch = useDispatch();
  const count = useSelector (state => state.count.count);
  const didFail = useSelector (state => state.data.didFail);
  const isLoading = useSelector (state => state.data.isLoading);
  const data = useSelector (state => state.data.dataArray);


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
        onPress= {() => { 
            dispatch(setIsLoading(true));
            dispatch(getData());
          }
        }
      />
      
      </SafeAreaView>
    </>
  );
};

export default App;

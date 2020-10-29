import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  FlatList,
  View,
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

  function renderItem ({item} ) {

    return(
      <>
        <View style={{ flexDirection: "row"}}>
          <Text>Commit Hash: </Text>
          <Text style={{flex: 1}} >
            {item.commitHash}
          </Text>
        </View>
        <View style={{flexDirection: "row"}}>
          <Text>Commit message: </Text>
          <Text style={{flex: 1}}>
          {item.commitMessage}
        </Text>
        </View>
        <View style={{flexDirection: "row"}}>
          <Text>Author: </Text>
          <Text style={{flex: 1}}>
          {item.author}
        </Text>
        </View>
        <View style={{borderBottomWidth:1}}/>
      </>
    );

  }
  function renderData (){
  console.log("didFail: ", didFail);
    if (didFail) {
      console.log("didFail: ", didFail);
      return(
        <>
          <Text style={{ textAlign:'center'}}>
            There was a problem loading data either thr Repo does not exist or is private.
          </Text>
        </>
      );
    }
    else {
      return(
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.commitHash}
        />
      );
    }
  }

  return (
    <>
      <SafeAreaView>
        <Button 
          title="Make API call" 
          onPress= {() => { 
              dispatch(setIsLoading(true));
              dispatch(getData());
            }
          }
        
        />
        {renderData()}
      </SafeAreaView>
    </>
  );
};

export default App;

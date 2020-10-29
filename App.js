import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  FlatList,
  View,
  StyleSheet,
} from 'react-native';

import {getData, setIsLoading} from './actions/apiActions';

import {useDispatch, useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const didFail = useSelector (state => state.data.didFail);
  const data = useSelector (state => state.data.dataArray);

  function renderItem ({item} ) {

    return(
      <>
        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>Author: </Text>
          <Text style={{flex: 1}}>
          {item.author}
        </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>Commit Hash: </Text>
          <Text style={{flex: 1}} >
            {item.commitHash}
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>Commit message: </Text>
          <Text style={{flex: 1}}>
          {item.commitMessage}
        </Text>
        </View>
       
        <View style={{borderBottomWidth:1}}/>
      </>
    );

  }
  function renderData (){
    if (didFail) {
      return(
        <>
          <Text style={{ textAlign:'center'}}>
            There was a problem loading data either thr Repo does not exist or is private.
          </Text>
        </>
      );
    }else if (data.length < 1){
      return(
        <>
          <Text style={{ textAlign:'center'}}>
            Press the button above to get the data.
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
          title="Get Commit data" 
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


const styles = StyleSheet.create(
  {
    rowContainer: {
      flexDirection:'row',
    },
    rowTitle: {
      fontWeight: 'bold',
    }
  }
);
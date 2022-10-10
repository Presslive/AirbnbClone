/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView,StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationLocation from './src/screens/DestinationSearch';

const post1 = feed[0];

const App: () => React$Node = () => {
  
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView >
        {/*<HomeScreen /> */}
        { /*<Post post={post1} />*/}
       {/* <SearchResultsScreen /> */}
       <DestinationLocation />

    </SafeAreaView>
    </>

  );
};



export default App;

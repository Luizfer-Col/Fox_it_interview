/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, Text, View, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import NewsList from './src/components/NewsList';
import {mockNewsData, mockNewsDataa} from './src/mockData';
import {NewsProps} from './src/types';

function App(): React.JSX.Element {
  const [news, setNews] = useState<NewsProps[]>([]);

  useEffect(() => {
    setNews(mockNewsData.articles);
  }, []);

  return (
    <View style={{backgroundColor: 'blue', flex: 1}}>
      <NewsList news={news} />
    </View>
  );
}

export default App;

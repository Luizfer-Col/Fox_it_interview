import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {NewsProps} from '../types';
import NewsItem from './NewsItem';

interface Props {
  news: NewsProps[];
}

const NewsList = ({news}: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={item => item.title}
        renderItem={({item}) => <NewsItem itemNews={item} />}
      />
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
});

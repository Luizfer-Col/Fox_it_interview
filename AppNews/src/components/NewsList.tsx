import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {NewsProps} from '../types';
import NewsItem from './NewsItem';
import {fetchNews} from '../service';

const NewsList = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const newNews = await fetchNews(page, 20);
      setNews(prevNews => [...prevNews, ...newNews]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEndReached = () => {
    if (!loading) {
      fetchData();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={item =>
          item.url.length +
          item.url +
          Math.floor(Math.random() * (9999 - 100 + 1)) +
          100
        }
        renderItem={({item}) => <NewsItem itemNews={item} />}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          loading ? (
            <ActivityIndicator
              style={styles.loadingIndicator}
              size="large"
              color="#2580C8"
            />
          ) : null
        }
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
  loadingIndicator: {
    marginVertical: 20,
  },
});

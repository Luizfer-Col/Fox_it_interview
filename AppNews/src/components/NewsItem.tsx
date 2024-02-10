import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NewsProps} from '../types';
import {formatDate} from '../utils';

const NewsItem = ({itemNews}: {itemNews: NewsProps}) => {
  const {description, publishedAt, title, urlToImage, url} = itemNews;
  const date = formatDate(publishedAt);
  const type = 'TECNOLOGY';

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: urlToImage}}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.typeLabel}>{type}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSubtitle} numberOfLines={4}>
          {description}
        </Text>
        <View style={styles.bottom}>
          <Text style={styles.textDate}>{date}</Text>
          <TouchableOpacity onPress={() => console.log('url')}>
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginVertical: 6,
    marginHorizontal: 8,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 2,
    marginRight: 4,
  },
  image: {
    borderRadius: 8,
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  typeLabel: {
    backgroundColor: 'black',
    padding: 3,
    fontSize: 10,
    fontWeight: 'bold',
    borderRadius: 4,
    alignSelf: 'flex-end',
    top: 6,
    right: 6,
  },
  textContainer: {
    flex: 3,
    paddingLeft: 8,
  },
  textTitle: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 13,
  },
  textSubtitle: {
    color: 'black',
    marginBottom: 6,
    fontSize: 12,
  },
  bottom: {
    paddingTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDate: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 13,
  },
  readMoreText: {
    color: '#2580C8',
    fontWeight: 'bold',
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const Header = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../commons/logo.png')}
        style={styles.centerImage}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: '#1A69A7',
  },
  centerImage: {
    width: '100%',
    height: '100%',
  },
});

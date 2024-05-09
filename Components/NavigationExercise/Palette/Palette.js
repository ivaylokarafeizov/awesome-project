import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ColorBox from './ColorBox';

const Palette = ({ route }) => {
  const { paletteName, colors } = route.params;

  return (
    <FlatList
      style={styles.container}
      data={colors}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
      )}
      keyExtractor={(item) => item.hexCode}
    />
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 20, paddingHorizontal: 10 },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  list: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  color: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    height: 40,
    width: 40,
    marginRight: 10,
  },
});

export default Palette;

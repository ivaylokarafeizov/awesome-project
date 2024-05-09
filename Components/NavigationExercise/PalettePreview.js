import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  View,
} from 'react-native';

const PalettePreview = ({ palette, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.heading}>{palette.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={palette.colors.slice(0, 5)}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 30,
    width: 30,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },
  heading: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: { marginBottom: 10, flexDirection: 'row' },
});

export default PalettePreview;

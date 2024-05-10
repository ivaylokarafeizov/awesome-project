import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PalettePreview from './PalettePreview';

const NavigationExercise = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);

  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );

    if (response.ok) {
      const palettes = await response.json();
      setPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={palettes}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('Palette', item);
          }}
          palette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});

export default NavigationExercise;

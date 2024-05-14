import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import PalettePreview from './PalettePreview';

const NavigationExercise = ({ navigation, route }) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

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

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalettes();
    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setPalettes((palettes) => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  return (
    <FlatList
      style={styles.container}
      data={palettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('Palette', item);
          }}
          palette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddNewPaletteModal');
          }}
        >
          <Text style={styles.buttonText}>Add New Color Palette</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 19,
    color: 'teal',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default NavigationExercise;

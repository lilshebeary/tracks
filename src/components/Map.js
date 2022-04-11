import React from 'react'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'


const Map = () => {
  return (
    <MapView  
        style={styles.map} 
        initialRegion={{
            latitude: 47.62210,
            longitude: -122.34994,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
    />
  );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }

});

export default Map;
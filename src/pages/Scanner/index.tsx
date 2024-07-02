import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannerType, setScannerType] = useState(null);
  const [scannedData, setScannedData] = useState(null);  // Adicione este estado

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);

    Alert.alert(
      'Scanned Data',
      `Scanned ${scannerType}: ${data}`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Open', onPress: () => handleNavigation(data) },
      ],
      { cancelable: true }
    );
  };

  const handleNavigation = (data) => {
    if (Linking.canOpenURL(data)) {
      Linking.openURL(data);
    } else {
      Alert.alert('Invalid URL', 'The scanned data is not a valid URL');
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonContainer}>
          <Button
            title="Ler QR Code"
            onPress={() => {
              setScannerType('QR Code');
              setScanned(false);
              setScannedData(null);
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Ler Código de Barras"
            onPress={() => {
              setScannerType('Barcode');
              setScanned(false);
              setScannedData(null);
            }}
          />
        </View>
      </View>
      {!scanned && scannerType && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#EFF",
  },
  buttonWrapper: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonContainer: {
    margin: 10,
  },
});

import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Input} from './src/components/Input';

const DOLLAR_PRICE = 5.07;

const App = () => {
  const [inverter, setInverter] = useState(false);
  const [firstValue, setFirstValue] = useState('');
  const [result, setResult] = useState(0.0);

  const convert = () => {
    if (firstValue !== '') {
      if (!inverter) {
        setResult((Number(firstValue) / DOLLAR_PRICE).toFixed(2));
      } else {
        setResult((Number(firstValue) * DOLLAR_PRICE).toFixed(2));
      }
      setFirstValue('');
    } else {
      alert('Preencha com um valor');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>

      <View style={styles.row}>
        <Text style={styles.highlight}>Real</Text>
        <Switch
          value={inverter}
          onChange={() => {
            setInverter(!inverter);
            setResult(0.0);
          }}
          thumbColor={inverter ? '#aad835' : '#fdd835'}
        />
        <Text style={styles.highlight}>Dólar</Text>
      </View>

      <Input
        currency={inverter ? 'U$' : 'R$'}
        onChangeText={val => setFirstValue(val)}
        value={firstValue}
        keyboardType="number-pad"
      />

      <TouchableOpacity style={styles.button} onPress={() => convert()}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>

      <View style={styles.result}>
        <Text style={styles.resultValue}>{`${
          inverter ? 'R$' : 'U$'
        } ${result}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#483d8b',
  },
  title: {
    fontSize: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 24,
    marginBottom: 24,
  },
  button: {
    alignItems: 'center',
    marginTop: 8,
    padding: 10,
    backgroundColor: '#2E2759',
  },
  buttonText: {
    color: '#b0a4ff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  highlight: {
    color: '#b0c4de',
    fontSize: 18,
  },
  result: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultValue: {
    fontSize: 24,
    color: '#b0c4de',
  },
});

export default App;

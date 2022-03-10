import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text, Button} from 'react-native';

import {Input} from './src/components/Input';

const App = () => {
  const [inverter, setInverter] = useState(true);
  const [firstValue, setFirstValue] = useState('20');
  const [secondValue, setSecondValue] = useState(0.0);

  const convert = () => {
    setSecondValue((Number(firstValue) / 5.07).toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <View style={styles.row}>
        <Text style={styles.highlight}>Real</Text>
        <Switch value={inverter} onChange={() => setInverter(!inverter)} />
        <Text style={styles.highlight}>Dólar</Text>
      </View>
      <Input
        onChangeText={val => setFirstValue(val)}
        value={firstValue}
        keyboardType="number-pad"
      />
      <Button
        style={styles.button}
        onPress={() => convert()}
        title="Converter"
        color="#2E2759"
      />
      <View style={styles.result}>
        <Text style={styles.secondValue}>{`U$ ${secondValue}`}</Text>
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
  button: {
    margin: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 24,
    marginBottom: 24,
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
  secondValue: {
    fontSize: 24,
    color: '#b0c4de',
  },
});

export default App;

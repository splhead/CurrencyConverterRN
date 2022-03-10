import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({currency = 'R$', ...props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.currency}>{currency}</Text>
        <TextInput style={styles.input} {...props} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  currency: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#b0c4de',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 8,
    color: '#b0c4de',
    backgroundColor: 'mediumslateblue',
    marginLeft: 8,
    borderRadius: 8,
  },
});

export {Input};

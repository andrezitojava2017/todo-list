/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AddTask from './components/addTask';
import ListaTarefas from './components/listaTarefas';

const App = () => {
  const [tarefas, setTarefas] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [titulo, setTitulo] = useState('');

  const handleAdicionar = () => {
    setTarefas([...tarefas, {titulo: titulo, situacao: isEnabled}]);
    setTitulo('');
  };
  const handleChangeText = text => {
    setTitulo(text);
  };
  const handleSituacao = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Projeto React Native -INFNET</Text>
      </View>

      <AddTask
        titulo={titulo}
        setTitulo={setTitulo}
        setEnable={handleSituacao}
        enable={isEnabled}
        handleAdicionar={handleAdicionar}
        handleChangeText={handleChangeText}
      />

      <ListaTarefas tarefas={tarefas} setTasks={setTarefas} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  safeArea: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default App;

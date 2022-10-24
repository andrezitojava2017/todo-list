import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const AddTask = props => {
  const [enable, setEnable] = useState(true);
  const teste = () => {
    setEnable(!enable);
  };

  return (
    <View>
      <Text style={estilo.text}>Tarefa</Text>
      <View>
        <TextInput
          style={estilo.input}
          value={props.titulo}
          onChangeText={props.handleChangeText}
        />
        <View style={{height: 40}}>
          <View style={estilo.opt}>
            <Text style={{width: 70, height: 20}}>Concluida:</Text>

            <Switch
              style={{width: 50, height: 10}}
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={props.enable ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={props.setEnable}
              value={props.enable}
            />
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity style={estilo.btn} onPress={props.handleAdicionar}>
          <Text style={estilo.txt}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const estilo = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
  },
  btn: {
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#4187D9',
  },
  txt: {
    fontSize: 20,
  },
  opt: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});

export default AddTask;

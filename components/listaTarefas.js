import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

const ListaTarefas = props => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const removeTasks = index => {
    let array = props.tarefas.filter(i => {
      props.tarefas.indexOf(i.titulo);
    });
    props.tarefas.splice(array, 1);
    props.setTasks([...props.tarefas]);
  };

  const Item = ({titulo, situacao}) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>{titulo}</Text>
        {situacao ? (
          <Text style={styles.situacao}>Concluido</Text>
        ) : (
          <Text style={styles.situacao}>Não Concluido</Text>
        )}
      </View>
      <View>
        <Button title="deletar" onPress={removeTasks} />
      </View>
    </View>
  );
  const renderItem = ({item, index}) => (
    <Item titulo={item.titulo} situacao={item.situacao} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={props.tarefas}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.titulo + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  item: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#5c75ed',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
  situacao: {
    fontSize: 12,
  },
});
export default ListaTarefas;

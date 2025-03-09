import {FlatList, StyleSheet, Text, View} from 'react-native';
import Empty from '../../Empty/ui';
import useTodoList from '../models/useTodoList';

const TodoList = () => {
  const {mockedTodoList} = useTodoList();
  return (
    <>
      {mockedTodoList.length > 0 ? (
        <FlatList
          style={styles.list}
          data={mockedTodoList}
          renderItem={({item}) => (
            <View>
              <Text>{item.text}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Empty />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default TodoList;

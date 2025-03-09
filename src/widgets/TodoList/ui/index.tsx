import {FlatList, StyleSheet, Text, View} from 'react-native';
import Empty from '../../Empty/ui';
import TodoItem from '../TodoItem';
import {TodoItemInfo} from '../../../entities';

interface Props {
  todoList: TodoItemInfo[];
  onToggle: (id: number) => void;
}

const TodoList = ({todoList, onToggle}: Props) => {
  return (
    <>
      {todoList?.length > 0 ? (
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          style={styles.list}
          data={todoList}
          renderItem={({item}) => (
            <TodoItem
              id={item.id}
              text={item.text}
              done={item.done}
              onToggle={onToggle}
            />
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
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default TodoList;

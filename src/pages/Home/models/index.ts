import {useEffect, useState} from 'react';
import {TodoItemInfo} from '../../../entities';
import getMockedTodoItemInfoList from '../api/getMockedTodoItemInfoList';
import useAsyncStorage from '../../../shared/lib/AsyncStorage';

const useHome = () => {
  const {save, load} = useAsyncStorage();
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [todoList, setTodoList] = useState<TodoItemInfo[]>(
    !isFirst ? [] : getMockedTodoItemInfoList(),
  );

  const onInsert = (text: string) => {
    setTodoList(prev => {
      const nextId =
        todoList.length > 0
          ? Math.max(...todoList.map(todo => todo.id)) + 1
          : 1;

      const newTodoItemInfo = {
        id: nextId,
        text,
        done: false,
      };
      return prev.concat(newTodoItemInfo);
    });
  };

  const onToggle = (id: number) => {
    setTodoList(prev => {
      const changedTodoItems = prev.map(todoItemInfo =>
        todoItemInfo.id === id
          ? {...todoItemInfo, done: !todoItemInfo.done}
          : todoItemInfo,
      );
      return changedTodoItems;
    });
  };

  const onDelete = (id: number) => {
    setTodoList(prev => {
      return prev.filter(todoItemInfo => todoItemInfo.id !== id);
    });
  };

  useEffect(() => {
    if (!isFirst) save('todos', todoList);
  }, [todoList]);

  useEffect(() => {
    load<TodoItemInfo[]>('todos').then((result: TodoItemInfo[] | null) => {
      const todos = result as TodoItemInfo[] | null;
      setTodoList(todos ? todos : getMockedTodoItemInfoList());
    });

    setIsFirst(false);
  }, []);

  return {todoList, setTodoList, onInsert, onToggle, onDelete};
};

export default useHome;

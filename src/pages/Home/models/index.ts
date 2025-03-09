import {useState} from 'react';
import {TodoItemInfo} from '../../../entities';
import getMockedTodoItemInfoList from '../api/getMockedTodoItemInfoList';

const useHome = () => {
  const [todoList, setTodoList] = useState<TodoItemInfo[]>(
    getMockedTodoItemInfoList(),
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

  return {todoList, setTodoList, onInsert, onToggle};
};

export default useHome;

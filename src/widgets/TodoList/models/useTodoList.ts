import {TodoItemInfo} from '../../../entities';
import getMockedTodoItemInfoList from '../api/getMockedTodoItemInfoList';

const useTodoList = () => {
  const mockedTodoList: TodoItemInfo[] = getMockedTodoItemInfoList();

  return {mockedTodoList};
};

export default useTodoList;

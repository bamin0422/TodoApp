import {TodoItemInfo} from '../../../entities';

const getMockedTodoItemInfoList: () => TodoItemInfo[] = () => {
  return [
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ];
};

export default getMockedTodoItemInfoList;

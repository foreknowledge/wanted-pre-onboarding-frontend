import TodoData from '../../types/TodoData.types';
import TodoItem from '../todo_item/TodoItem';

const TodoList = () => {
  return (
    <ul className="m-8">
      {SAMPLE_TODOS.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;

const SAMPLE_TODOS: TodoData[] = [
  {
    id: 1,
    todo: '과제하기1',
    isCompleted: true,
    userId: 1,
  },
  {
    id: 2,
    todo: '과제하기2',
    isCompleted: false,
    userId: 1,
  },
  {
    id: 3,
    todo: '과제하기3',
    isCompleted: true,
    userId: 1,
  },
  {
    id: 4,
    todo: '과제하기4',
    isCompleted: true,
    userId: 1,
  },
  {
    id: 5,
    todo: '과제하기5',
    isCompleted: false,
    userId: 1,
  },
  {
    id: 6,
    todo: '과제하기6',
    isCompleted: false,
    userId: 1,
  },
  {
    id: 7,
    todo: '과제하기7',
    isCompleted: false,
    userId: 1,
  },
];

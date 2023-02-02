import TodoData from '../../types/TodoData.types';
import TodoItem from '../todo_item/TodoItem';

interface Props {
  todos: TodoData[];
}

const TodoList = ({ todos }: Props) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 px-6">
      <ul className="py-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

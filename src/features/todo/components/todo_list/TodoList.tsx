import TodoData from '../../types/TodoData.types';
import TodoItem from '../todo_item/TodoItem';

interface Props {
  todos: TodoData[];
  invalidateTodos: () => void;
}

const TodoList = ({ todos, invalidateTodos }: Props) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 px-4">
      <ul className="pb-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            invalidateTodos={invalidateTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

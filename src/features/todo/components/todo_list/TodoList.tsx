import { useContext } from 'react';
import { deleteTodo, updateTodo } from '../../../../apis/todo';
import TokenContext from '../../../../context/token/TokenContext';
import TodoData from '../../types/TodoData.types';
import TodoItem from '../todo_item/TodoItem';

interface Props {
  todos: TodoData[];
  invalidateTodos: () => void;
}

const TodoList = ({ todos, invalidateTodos }: Props) => {
  const { token } = useContext(TokenContext);

  const handleDelete = (id: number) => {
    if (token && window.confirm('정말 삭제하시겠습니까?')) {
      deleteTodo(token, id).then(invalidateTodos);
    }
  };

  const handleUpdate = (newTodo: TodoData) => {
    if (token) {
      updateTodo(token, newTodo.id, newTodo.todo, newTodo.isCompleted) //
        .then(invalidateTodos);
    }
  };

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 px-4">
      <ul className="pb-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

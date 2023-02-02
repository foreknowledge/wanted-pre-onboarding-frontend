import { useContext, useEffect, useState } from 'react';
import { getTodos } from '../../../../apis/todo';
import TokenContext from '../../../../context/token/TokenContext';
import TodoData from '../../types/TodoData.types';
import TodoItem from '../todo_item/TodoItem';

const TodoList = () => {
  const { token } = useContext(TokenContext);
  const [todos, setTodos] = useState<TodoData[]>([]);

  useEffect(() => {
    if (token) {
      getTodos(token).then(setTodos);
    }
  }, [token]);

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

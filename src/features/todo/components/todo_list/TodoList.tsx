import { useState } from 'react';
import TodoData from '../../types/TodoData.types';
import TodoEditForm from '../todo_edit_form/TodoEditForm';
import TodoItem from '../todo_item/TodoItem';

interface Props {
  todos: TodoData[];
  invalidateTodos: () => void;
}

const TodoList = ({ todos, invalidateTodos }: Props) => {
  const [editTodoId, setEditTodoId] = useState<number | null>(null);

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 px-4">
      <ul className="pb-4">
        {todos.map((todo) =>
          todo.id === editTodoId ? (
            <TodoEditForm todo={todo} />
          ) : (
            <TodoItem
              key={todo.id}
              todo={todo}
              invalidateTodos={invalidateTodos}
              onEdit={(id) => setEditTodoId(id)}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default TodoList;

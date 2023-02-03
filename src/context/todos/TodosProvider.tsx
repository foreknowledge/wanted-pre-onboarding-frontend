import { ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import {
  createTodo as createTodoApi,
  deleteTodo as deleteTodoApi,
  updateTodo as updateTodoApi,
  getTodos as getTodosApi,
} from '../../apis/todo';
import TodoData from '../../features/todo/types/TodoData.types';
import TokenContext from '../token/TokenContext';
import TodosContext from './TodosContext';

export default function TodosProvider({ children }: { children: ReactNode }) {
  const { token } = useContext(TokenContext);
  const [todos, setTodos] = useState<TodoData[]>([]);

  const invalidateTodos = useCallback(() => {
    if (token) {
      getTodosApi(token).then(setTodos);
    }
  }, [token]);

  // todos 초기화
  useEffect(() => {
    invalidateTodos();
  }, [invalidateTodos]);

  const createTodo = useCallback(
    async (todo: string) => {
      if (!token) throw new Error('토큰이 유효하지 않습니다.');

      const data = await createTodoApi(token, todo);
      invalidateTodos();

      return data;
    },
    [token, invalidateTodos]
  );

  const deleteTodo = useCallback(
    async (todoId: number) => {
      if (!token) throw new Error('토큰이 유효하지 않습니다.');

      const data = await deleteTodoApi(token, todoId);
      invalidateTodos();

      return data;
    },
    [token, invalidateTodos]
  );

  const updateTodo = useCallback(
    async (todo: TodoData) => {
      if (!token) throw new Error('토큰이 유효하지 않습니다.');

      const data = await updateTodoApi(
        token,
        todo.id,
        todo.todo,
        todo.isCompleted
      );
      invalidateTodos();

      return data;
    },
    [token, invalidateTodos]
  );

  return (
    <TodosContext.Provider
      value={{ todos, createTodo, deleteTodo, updateTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
}

import { useCallback, useContext, useEffect, useState } from 'react';
import { getTodos } from '../../../apis/todo';
import TokenContext from '../../../context/token/TokenContext';
import TodoData from '../types/TodoData.types';

export default function useTodos() {
  const { token } = useContext(TokenContext);
  const [todos, setTodos] = useState<TodoData[]>([]);

  const invalidateTodos = useCallback(() => {
    if (token) {
      getTodos(token).then(setTodos);
    }
  }, [token]);

  // todos 초기화
  useEffect(() => {
    invalidateTodos();
  }, [invalidateTodos]);

  return { todos, invalidateTodos };
}

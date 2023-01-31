import apiClient from '../apiClient';
import Todo from '../../types/todo/Todo';

export async function createTodo(
  accessToken: string,
  todo: string
): Promise<Todo> {
  return apiClient
    .post(
      '/todos',
      { todo },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
    .then((data) => data.data);
}

export async function getTodos(accessToken: string): Promise<Todo[]> {
  return apiClient
    .get('/todos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((data) => data.data);
}

export async function updateTodo(
  accessToken: string,
  todoId: number,
  todo: string,
  isCompleted: boolean
): Promise<Todo> {
  const data = { todo, isCompleted };
  return apiClient
    .put(`/todos/${todoId}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then((data) => data.data);
}

export async function deleteTodo(
  accessToken: string,
  todoId: number
): Promise<null> {
  return apiClient
    .delete(`/todos/${todoId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((data) => data.data);
}

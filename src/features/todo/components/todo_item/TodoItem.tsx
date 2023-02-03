import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { deleteTodo, updateTodo } from '../../../../apis/todo';
import TokenContext from '../../../../context/token/TokenContext';
import TodoData from '../../types/TodoData.types';

interface Props {
  todo: TodoData;
  invalidateTodos: () => void;
  onEdit: (id: number) => void;
}

const TodoItem = ({ todo, invalidateTodos, onEdit }: Props) => {
  const { token } = useContext(TokenContext);

  const handleDelete = (id: number) => {
    if (token && window.confirm('정말 삭제하시겠습니까?')) {
      deleteTodo(token, id).then(invalidateTodos);
    }
  };

  const handleCheckedChange = (checked: boolean) => {
    if (token) {
      updateTodo(token, todo.id, todo.todo, checked) //
        .then(invalidateTodos);
    }
  };

  return (
    <li className="flex items-center justify-between px-2 py-3 text-lg">
      <div className="flex flex-1 items-center">
        <input
          className="form-checkbox float-left mr-3 h-5 w-5 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-100 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(e) => handleCheckedChange(e.target.checked)}
          id="todoCheck"
        />
        <label
          className={`${
            todo.isCompleted ? 'line-through opacity-50' : ''
          } form-check-label inline-block text-gray-800`}
          htmlFor="todoCheck"
        >
          {todo.todo}
        </label>
      </div>
      <div>
        <button
          className="w-9 text-gray-700 hover:opacity-50"
          data-testid="modify-button"
          onClick={() => onEdit(todo.id)}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          className="w-9 text-gray-700 hover:text-red-500"
          onClick={() => handleDelete(todo.id)}
          data-testid="delete-button"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

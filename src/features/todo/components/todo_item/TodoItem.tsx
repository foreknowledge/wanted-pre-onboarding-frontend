import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import TodosContext from '../../../../context/todos/TodosContext';
import TodoData from '../../types/TodoData.types';

interface Props {
  todo: TodoData;
  onEdit: (id: number) => void;
}

const TodoItem = ({ todo, onEdit }: Props) => {
  const { deleteTodo, updateTodo } = useContext(TodosContext);

  const handleDelete = (id: number) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteTodo(id);
    }
  };

  return (
    <li className="flex items-center justify-between px-2 py-3 text-lg">
      <label className="flex flex-1 items-center">
        <input
          className="form-checkbox float-left mr-3 h-5 w-5 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-100 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(e) =>
            updateTodo({ ...todo, isCompleted: e.target.checked })
          }
        />
        <span
          className={`${
            todo.isCompleted ? 'line-through opacity-50' : ''
          } form-check-label inline-block whitespace-pre-wrap text-gray-800`}
        >
          {todo.todo}
        </span>
      </label>
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

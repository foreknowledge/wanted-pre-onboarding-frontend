import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import TodosContext from '../../../../context/todos/TodosContext';
import TodoData from '../../types/TodoData.types';

interface Props {
  todo: TodoData;
  onEditEnded: () => void;
}

const TodoEditForm = ({ todo, onEditEnded }: Props) => {
  const { updateTodo } = useContext(TodosContext);
  const [editTodo, setEditTodo] = useState<TodoData>({ ...todo });

  return (
    <li className="flex w-full items-center rounded bg-gray-300 px-2 py-3 text-lg">
      <input
        className="form-checkbox float-left mr-3 h-5 w-5 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-100 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
        type="checkbox"
        checked={editTodo.isCompleted}
        onChange={(e) =>
          setEditTodo((todo) => {
            return { ...todo, isCompleted: e.target.checked };
          })
        }
      />
      <input
        className="form-input flex-1 bg-transparent p-0 text-lg"
        type="text"
        autoFocus
        value={editTodo.todo}
        onChange={(e) =>
          setEditTodo((todo) => {
            return { ...todo, todo: e.target.value };
          })
        }
        data-testid="modify-input"
      />
      <button
        className="w-9 text-green-600 hover:opacity-50"
        onClick={() => updateTodo(editTodo).then(onEditEnded)}
        data-testid="submit-button"
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button
        className="w-9 text-red-600 hover:opacity-50"
        onClick={onEditEnded}
        data-testid="cancel-button"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </li>
  );
};

export default TodoEditForm;

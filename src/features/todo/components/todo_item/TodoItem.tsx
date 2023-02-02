import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TodoData from '../../types/TodoData.types';

interface Props {
  todo: TodoData;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onDelete }: Props) => {
  return (
    <li className="my-2 flex justify-between text-lg">
      <div className="flex items-center">
        <input
          className="form-checkbox float-left mr-3 h-5 w-5 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-100 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
          type="checkbox"
          checked={todo.isCompleted}
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
        <button className="text-gray-700 hover:opacity-50">
          <FontAwesomeIcon className="mx-2" icon={faPenToSquare} />
        </button>
        <button
          className="text-gray-700 hover:text-red-500"
          onClick={() => onDelete(todo.id)}
        >
          <FontAwesomeIcon className="mx-2" icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

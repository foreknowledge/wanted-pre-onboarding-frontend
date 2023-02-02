import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TodoData from '../../types/TodoData.types';

const TodoItem = ({ todo }: { todo: TodoData }) => {
  return (
    <li className="my-2 flex justify-between text-lg">
      <div className="">
        <input
          className="form-checkbox float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-100 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
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
        <FontAwesomeIcon className="mx-2 text-gray-700" icon={faPenToSquare} />
        <FontAwesomeIcon className="mx-2 text-gray-700" icon={faTrashCan} />
      </div>
    </li>
  );
};

export default TodoItem;

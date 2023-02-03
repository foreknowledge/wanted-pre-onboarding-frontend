import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TodoData from '../../types/TodoData.types';

interface Props {
  todo: TodoData;
}

const TodoEditForm = ({ todo }: Props) => {
  return (
    <li className="flex w-full items-center rounded bg-gray-300 px-2 py-3 text-lg">
      <input
        className="form-checkbox float-left mr-3 h-5 w-5 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-100 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
        type="checkbox"
        checked={todo.isCompleted}
      />
      <textarea
        className="form-textare flex-1 resize-none bg-transparent outline-none"
        autoFocus
        value={todo.todo}
      />
      <button className="w-9 text-green-600 hover:opacity-50">
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button className="w-9 text-red-600 hover:opacity-50">
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </li>
  );
};

export default TodoEditForm;

import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoAddForm = () => {
  return (
    <form className="flex w-full border-b-[1px] border-gray-600">
      <input
        className="form-input flex-1 bg-transparent"
        type="text"
        placeholder="새로운 투두를 추가해보세요."
      />
      <button className="w-10 hover:opacity-70">
        <FontAwesomeIcon className="text-gray-700" icon={faAdd} />
      </button>
    </form>
  );
};

export default TodoAddForm;

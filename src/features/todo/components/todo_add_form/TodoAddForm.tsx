import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useContext } from 'react';
import { createTodo } from '../../../../apis/todo';
import TokenContext from '../../../../context/token/TokenContext';
import TodoData from '../../types/TodoData.types';

interface Props {
  onTodoAdded: (todo: TodoData) => void;
}

const TodoAddForm = ({ onTodoAdded }: Props) => {
  const { token } = useContext(TokenContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const inputElement = formElement[0] as HTMLInputElement;

    if (token === null) return;

    createTodo(token, inputElement.value).then((data) => {
      onTodoAdded(data);
      formElement.reset();
    });
  };

  return (
    <form
      className="flex w-full border-b-[1px] border-gray-600"
      onSubmit={handleSubmit}
    >
      <input
        className="form-input flex-1 overflow-hidden text-ellipsis bg-transparent"
        type="text"
        placeholder="새로운 할 일을 추가해보세요."
      />
      <button className="w-10 hover:opacity-50" type="submit">
        <FontAwesomeIcon className="text-gray-700" icon={faAdd} />
      </button>
    </form>
  );
};

export default TodoAddForm;

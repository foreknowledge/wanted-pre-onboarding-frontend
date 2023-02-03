import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useContext } from 'react';
import TodosContext from '../../../../context/todos/TodosContext';

const TodoAddForm = () => {
  const { createTodo } = useContext(TodosContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const inputElement = formElement[0] as HTMLInputElement;

    const todo = inputElement.value;
    createTodo(todo).then(() => {
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
        data-testid="new-todo-input"
      />
      <button
        className="w-10 text-gray-700 hover:opacity-50"
        type="submit"
        data-testid="new-todo-add-button"
      >
        <FontAwesomeIcon icon={faAdd} />
      </button>
    </form>
  );
};

export default TodoAddForm;

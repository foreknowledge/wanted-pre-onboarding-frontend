import Header from '../../features/todo/components/header/Header';
import TodoAddForm from '../../features/todo/components/todo_add_form/TodoAddForm';
import TodoList from '../../features/todo/components/todo_list/TodoList';

const TodoPage = () => {
  return (
    <div className="h-screen bg-gray-200">
      <div className="absolute top-0 w-full">
        <Header />
      </div>
      <div className="flex h-screen w-full items-center justify-center pt-16">
        <div className="flex h-full w-1/2 flex-col max-md:w-full">
          <div className="px-8">
            <TodoAddForm />
          </div>
          <div className="relative mt-4 flex-1 overflow-y-scroll">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoPage;

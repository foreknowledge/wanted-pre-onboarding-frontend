import Header from '../../features/todo/components/header/Header';
import TodoList from '../../features/todo/components/todo_list/TodoList';

const TodoPage = () => {
  return (
    <div className="h-screen">
      <div className="absolute top-0 w-full">
        <Header />
      </div>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex h-4/5 w-1/2 flex-col rounded-xl bg-gray-200">
          <div className="relative my-4 flex-1 overflow-y-scroll">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoPage;

import Header from '../../features/todo/components/header/Header';
import TodoList from '../../features/todo/components/todo_list/TodoList';

const TodoPage = () => {
  return (
    <div className="h-screen">
      <div className="absolute top-0 w-full">
        <Header />
      </div>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-4/5 w-1/2 rounded-xl bg-gray-200">
          <TodoList />
        </div>
      </div>
    </div>
  );
};
export default TodoPage;

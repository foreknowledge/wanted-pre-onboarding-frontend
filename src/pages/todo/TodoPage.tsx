import TodoList from '../../features/todo/components/todo_list/TodoList';

const TodoPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="h-4/5 w-1/2 rounded-xl bg-gray-200">
        <TodoList />
      </div>
    </div>
  );
};
export default TodoPage;

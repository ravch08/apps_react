import { useState } from "react";

import BackButton from "../../layout/BackButton";

const TodoList2 = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodoList((prev) => [...prev, todo]);
    setTodo("");
  };

  return (
    <section className="section mt-28 items-start">
      <div className="container mx-auto h-full">
        <BackButton />
        <div className="mb-16 flex flex-col items-center justify-start">
          <h2 className="mb-12 font-serif text-3xl">TODO List 2</h2>

          <form className="flex flex-col items-center">
            <div className="form-control">
              <label htmlFor="todo">Add Items:</label>
              <input
                type="text"
                value={todo}
                placeholder="Enter here..."
                className="ml-8 border-none bg-slate-300 px-4 py-2 outline-none"
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>
            <button
              type="submit"
              onClick={handleAddTodo}
              className="btn-primary mt-8"
            >
              ADD ITEMS
            </button>
          </form>

          <div className="mt-12 w-2/4  text-center text-white">
            <ul>
              {todoList?.map((item, idx) => (
                <li
                  key={idx}
                  className="my-2 rounded-md bg-slate-800 px-4 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoList2;

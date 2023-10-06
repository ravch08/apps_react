import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { BackButton } from "../../utils/helper";

const TodoList = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodoItems = (e) => {
    e.preventDefault();
    if (!todoItem) return;
    setTodoList((prevList) => [...prevList, todoItem.trim()]);
    setTodoItem("");
  };

  const deleteToDoItem = (id: number): void => {
    console.log(id);
    const updatedToDoList = todoList.filter((_, index) => index !== id);
    setTodoList(updatedToDoList);
  };

  return (
    <section className="section mt-28 items-start">
      <div className="container mx-auto h-full">
        <BackButton />
        <div className="mb-16 flex flex-col items-center justify-start">
          <h2 className="mb-12 font-serif text-3xl">TO-DO List</h2>
          <form className="mx-auto mb-12 flex w-2/4 items-center justify-between">
            <label htmlFor="input">
              <strong>Items:</strong>
            </label>
            <input
              autoFocus
              type="text"
              value={todoItem}
              className="mx-2 w-2/3 bg-slate-200 p-2"
              placeholder="Enter items here..."
              onChange={(e) => setTodoItem(e.target.value)}
            />
            <input
              type="submit"
              value="Add to List"
              onClick={addTodoItems}
              className="btn-primary"
            />
          </form>

          <ul className="flex w-2/4 flex-col items-start gap-2">
            {todoList.map((item, idx) => (
              <li key={uuidv4()} className="flex w-full justify-center">
                <span className="mr-4 w-2/3 rounded-md bg-zinc-300 p-2">
                  {item}
                </span>
                <a
                  href="#!"
                  className="btn-delete"
                  onClick={() => deleteToDoItem(idx)}
                >
                  DELETE
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TodoList;

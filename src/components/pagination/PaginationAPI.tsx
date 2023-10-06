import { useEffect, useState } from "react";
import { BackButton, Loader } from "../../utils/helper";

const PaginationAPI = () => {
  const [todos, setTodos] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const data = await res.json();
      setTodos(data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const indexOfLastTodo = curPage * itemsPerPage; // 2 * 12 = 24
  const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;

  const numOfPages = Math.ceil(todos.length / itemsPerPage);
  const pagesArray = [...Array(numOfPages + 1).keys()].slice(1);

  const contentPerPage = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const handleNext = () => {
    if (curPage >= numOfPages) setCurPage(1);
    else setCurPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (curPage <= 1) setCurPage(numOfPages);
    else setCurPage((prev) => prev - 1);
  };

  return (
    <section className="section">
      <div className="container mx-auto flex flex-col">
        <BackButton />
        <div className="mb-16 flex items-center justify-around">
          <h2 className="font-serif text-5xl">Pagination</h2>
          <select
            id="itemsOnPage"
            className="selectClass"
            onChange={(e) => setItemsPerPage(e.target.value)}
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>

        {/* Items to be displayed */}
        <div className="mb-16 flex flex-wrap items-start justify-between gap-4">
          {isLoading ? (
            <Loader />
          ) : (
            contentPerPage?.map((todo) => (
              <div
                key={todo.id}
                className="mb-4 flex h-32 w-64 flex-col items-center justify-center rounded-md bg-slate-600 p-4 text-center text-white transition-colors duration-500 ease-in-out hover:bg-slate-800"
              >
                <span>{todo.id}</span>
                <p>{todo.title}</p>
              </div>
            ))
          )}
        </div>

        {/* number of pages  */}
        <div className="flex justify-center gap-4">
          <button onClick={handlePrev}>Prev</button>
          {pagesArray?.map((page) => (
            <button
              key={page}
              onClick={() => setCurPage(page)}
              className={curPage === page ? "btn-page active" : "btn-page"}
            >
              {page}
            </button>
          ))}
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default PaginationAPI;

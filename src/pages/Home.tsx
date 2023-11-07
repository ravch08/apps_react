import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="container mx-auto py-16">
        <h2 className="mb-16 text-center font-sans text-5xl font-extrabold text-yellow-700">
          APPS
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link to="counter" className="app-link">
            Counter
          </Link>
          <Link to="count-reducer" className="app-link">
            CountReducer
          </Link>
          <Link to="timer" className="app-link">
            Timer
          </Link>
          <Link to="pagination" className="app-link">
            Pagination
          </Link>
          <Link to="fetch" className="app-link">
            Fetch
          </Link>
          <Link to="navtabs" className="app-link">
            NavTabs
          </Link>
          <Link to="color" className="app-link">
            Hex Picker
          </Link>
          <Link to="nested" className="app-link">
            Nested
          </Link>
          <Link to="wordweb" className="app-link">
            WordWeb
          </Link>
          <Link to="radio" className="app-link">
            Radio
          </Link>
          <Link to="country-dropdown" className="app-link">
            Country
          </Link>
          <Link to="todo" className="app-link">
            To-Do List
          </Link>
          <Link to="checked" className="app-link red">
            Checked
          </Link>
          <Link to="checkdelete" className="app-link red">
            CheckDelete
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import CheckBoxList from "./components/Mid/CheckBoxList";
import CheckedDelete from "./components/Mid/CheckedDelete";

import {
  Count,
  CountryDropdown,
  Fetch,
  Home,
  NavTabs,
  Page404,
  PaginationAPI,
  Radio,
  Timer,
  ToDoList,
} from "./utils/helper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pagination" element={<PaginationAPI />} />
        <Route path="counter" element={<Count />} />
        <Route path="timer" element={<Timer />} />
        <Route path="fetch" element={<Fetch />} />
        <Route path="navtabs" element={<NavTabs />} />
        <Route path="todo" element={<ToDoList />} />
        <Route path="radio" element={<Radio />} />
        <Route path="checked" element={<CheckBoxList />} />
        <Route path="checkdelete" element={<CheckedDelete />} />
        <Route path="country-dropdown" element={<CountryDropdown />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

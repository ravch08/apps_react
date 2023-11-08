import { BrowserRouter, Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CheckBoxList from "./components/Mid/CheckBoxList";
import CheckedDelete from "./components/Mid/CheckedDelete";

import {
  ColorPicker,
  Count,
  CountReducer,
  CountryDropdown,
  CreateCircles,
  Fetch,
  Home,
  NavTabs,
  Nested,
  Page404,
  PaginationAPI,
  Radio,
  Timer,
  ToDoList,
  Wordweb,
} from "./utils/helper";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pagination" element={<PaginationAPI />} />
          <Route path="counter" element={<Count />} />
          <Route path="count-reducer" element={<CountReducer />} />
          <Route path="timer" element={<Timer />} />
          <Route path="nested" element={<Nested />} />
          <Route path="color" element={<ColorPicker />} />
          <Route path="fetch" element={<Fetch />} />
          <Route path="navtabs" element={<NavTabs />} />
          <Route path="wordweb" element={<Wordweb />} />
          <Route path="circles" element={<CreateCircles />} />
          <Route path="todo" element={<ToDoList />} />
          <Route path="radio" element={<Radio />} />
          <Route path="country-dropdown" element={<CountryDropdown />} />
          <Route path="checked" element={<CheckBoxList />} />
          <Route path="checkdelete" element={<CheckedDelete />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

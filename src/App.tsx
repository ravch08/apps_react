import { BrowserRouter, Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
  Password,
  PrivateRoute,
  Radio,
  SignIn,
  SignUp,
  StepCounter,
  Timer,
  ToDoList,
  ToDoList2,
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
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="pagination" element={<PaginationAPI />} />
          <Route path="counter" element={<Count />} />
          <Route path="count-reducer" element={<CountReducer />} />
          <Route path="step-counter" element={<StepCounter />} />
          <Route path="timer" element={<Timer />} />
          <Route path="nested" element={<Nested />} />
          <Route path="color" element={<ColorPicker />} />
          <Route path="fetch" element={<Fetch />} />
          <Route path="navtabs" element={<NavTabs />} />
          <Route path="wordweb" element={<Wordweb />} />
          <Route path="circles" element={<CreateCircles />} />
          <Route path="password" element={<Password />} />
          <Route path="todo" element={<ToDoList />} />
          <Route path="todo-delete" element={<ToDoList2 />} />
          <Route path="radio" element={<Radio />} />
          <Route path="country-dropdown" element={<CountryDropdown />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

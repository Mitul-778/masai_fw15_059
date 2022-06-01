import "./App.css";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import TodosCreate from "../src/Components/createTodo";
import { useSelector } from "react-redux";
import TodosEdit from "./Components/EditTodo";

const PrivateRoute = ({ isAuthenticate, children }) => {
  return isAuthenticate ? children : <Navigate to={"/login"} />;
};

function App() {
  const navigate = useNavigate();
  const isAuthenticate = useSelector((store) => store.user.isAuth);
  console.log("isAuthenticate:", isAuthenticate);

  return (
    <div className="App">
      <h1>Redux hooks</h1>
      <div>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/todos-create");
          }}
        >
          Tod-Dos
        </button>
      </div>

      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticate={isAuthenticate}>
              <Home />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/todos-create"
          element={
            <PrivateRoute isAuthenticate={isAuthenticate}>
              <TodosCreate />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/todos/:id/edit"
          element={
            <PrivateRoute isAuthenticate={isAuthenticate}>
              <TodosEdit />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

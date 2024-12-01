import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodoList from "./todoList";
import Navbar from "./navbar";

function App() {
  return (
    <>
      <CssBaseline />

      <div style={{ border: "solid", borderRadius: "5px" }}>
        <Navbar />
        <h1
          style={{
            color: "#0384fc",
          }}
        >
          Todos
        </h1>
        <TodoList />
      </div>
    </>
  );
}

export default App;

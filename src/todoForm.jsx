import { ListItem, TextField, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import Items from "./TodoItems";
import Create from "@mui/icons-material/Create";

export default function TodoForm({ addTodos }) {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
    addTodos(text);
    setText("");
  }
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          placeholder="enter"
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}

// <OutlinedInput
//   id="outlined-adornment-password"
//   type={showPassword ? "text" : "password"}
//   label="Password"
// />;

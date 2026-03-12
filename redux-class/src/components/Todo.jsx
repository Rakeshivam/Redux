import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("Delete", id);
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <AddForm />
      <h2>Todo List App</h2>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.task}{" "}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        );
      })}
    </>
  );
};

export default Todo;

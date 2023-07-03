import { useRef, useState } from "react";

const TodoList = () => {
  const todoInp = useRef(null);
  const [todoList, setTodoList] = useState([]);
  // const [todo, setTodo] = useState("");

  const onSubmitTodo = (e) => {
    e.preventDefault();
    const todo = todoInp.current.value;
    // if (todo !== "") {
    //   setTodoList((prev) => {
    //     return [...prev, todo];
    //   });
    //   setTodo("");
    //   todoInp.current.blur();
    // }
    setTodoList((prev) => [...prev, todo]);
    todoInp.current.value = "";
    todoInp.current.blur();
  };

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => {
      const result = prev.filter((todo, idx) => idx !== id);
      return result;
    });
  };

  return (
    <section id="todo">
      <form className={"todo-box"} onSubmit={onSubmitTodo}>
        <div className="input-box">
          <input
            type="text"
            id="todoInp"
            ref={todoInp}
            // value={todo}
            // onChange={onChangeTodo}
            // onBlur={() => setTodo("")}
            onBlur={() => {
              todoInp.current.value = "";
            }}
          />
          <label htmlFor="todoInp">할 일을 입력해주세요</label>
        </div>
      </form>
      <ul id="todoList">
        {todoList.map((todo, idx) => (
          <li key={idx} className="todo">
            <input type="checkbox" />
            <span id={idx}>{todo}</span>
            <button onClick={() => deleteTodo(idx)}>삭제</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;

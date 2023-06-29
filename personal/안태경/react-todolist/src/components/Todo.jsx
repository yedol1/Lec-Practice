import { useEffect, useState } from "react";

const TodoList = () => {
  const TODOS_KEY = "todos";
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  // localStorage 불러오기
  useEffect(() => {
    const savedList = localStorage.getItem(TODOS_KEY);

    if (savedList !== null) {
      const getItem = JSON.parse(savedList);
      setTodoList(getItem);
    }
  }, []);

  // localStorage 저장
  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    const newTodoObj = {
      text: todo,
      id: Date.now(),
    };
    setTodoList((oldList) => {
      const newList = [newTodoObj, ...oldList];
      return newList;
    });
    setTodo("");
  };

  const deleteTodo = (e) => {
    setTodoList(
      todoList.filter((item) => item.id !== parseInt(e.target.parentElement.id))
    );
  };

  // useEffect(() => {
  //   localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
  // }, [todoList]);

  return (
    <div>
      <h1>My To Dos ({todoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do..."
        />
      </form>

      <ul>
        {todoList.length !== 0
          ? todoList.map((item, index) => (
              <li key={index} id={item.id}>
                <span>✅{item.text}</span>
                <button onClick={deleteTodo}>🗑️</button>
              </li>
            ))
          : "no data"}
      </ul>
    </div>
  );
};
export default TodoList;

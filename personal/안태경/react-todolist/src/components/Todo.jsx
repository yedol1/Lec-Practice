import { useEffect, useState } from "react";

const TodoList = () => {
  const TODOS_KEY = "todos";
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  // localStorage 불러오기
  useEffect(() => {
    const savedList = localStorage.getItem(TODOS_KEY);
    if (savedList !== null) {
      setTodoList(JSON.parse(savedList));
    }
  }, []);

  // localStorage 저장
  useEffect(() => {
    // 조건부 추가 => 없으면 새로고침 시 로컬스토리지 값 사라짐
    if (todoList.length > 0) {
      localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
    }
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
    setTodoList((oldList) => [newTodoObj, ...oldList]);
    setTodo("");
  };

  const deleteTodo = (e) => {
    setTodoList(
      todoList.filter((item) => item.id !== parseInt(e.target.parentElement.id))
    );
  };

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

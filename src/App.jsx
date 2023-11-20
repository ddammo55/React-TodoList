import { useRef, useState } from "react";
import "./App.css"
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

const mockData = [
  {
    id : 0,
    isDone : true,
    content : "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : "밥하기",
    createDate: new Date().getTime(),
  },
  {
    id : 2,
    isDone : true,
    content : "음악 연습하기",
    createDate: new Date().getTime(),
  },
]



export default function App() {
  //여러개의 todo를 관리하기 위해 배열로 선언
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone : false,
      content : content,
      createDate: new Date().getTime(),
    }
   
    setTodos([newTodo, ...todos]);
    //새로운 todo를 추가하기 위해 기존의 todos 배열에 newTodo를 추가
  }

  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} />
    </div>
  );
}


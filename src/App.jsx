import { useReducer, useRef, useState, useCallback } from "react";
import "./App.css"
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { TodoContext } from "./TodoContext"

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

function reducer(state, action){
  switch(action.type){
    case "CREATE": {
      return [action.data, ...state]
    }
    case "UPDATE": {
      return state.map((it)=>it.id === action.data
      ? {...it, isDone : !it.isDone} 
      :it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.data)
    }
  }
}

export default function App() {

  const [todos, dispatch] = useReducer(reducer, mockData);
  //여러개의 todo를 관리하기 위해 배열로 선언
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE', 
      data:{
        id : idRef.current++,
        isDone : false,
        content : content,
        createDate: new Date().getTime(),
      }
    });
   // setTodos([newTodo, ...todos]);
    //새로운 todo를 추가하기 위해 기존의 todos 배열에 newTodo를 추가
  }

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type : "UPDATE",
      data : targetId,
    });
  }, []);

 

  const onDelete = useCallback((targetId) => {
    dispatch({
      type:"DELETE",
      data : targetId
    });
  }, [])

  return (
    <div className='App'>
      <Header />
     <TodoContext.Provider value={{ 
        todos,
        onCreate, 
        onUpdate,
        onDelete,
      }}>
        <TodoEditor/>
        <TodoList/>
     </TodoContext.Provider>
    </div>
  );
}


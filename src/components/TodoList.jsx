import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

export default function TodoList({todos}) {

  const [search, setSearch] = useState('');

  //이벤트 핸들어 함수
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const filterTodos = () => {
    if(search === '') {
      return todos;
    }
    // 대소문자 구분 없이 검색하기 위해 검색어와 할 일의 내용을 모두 소문자로 변환하여 비교합니다.
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  }

    return (
        <div className='TodoList'>
           <input value={search} onChange={onChangeSearch} placeholder='검색어를 입력하세요' />
           
            <div>
              {
                filterTodos().map((todo) => (<TodoItem key={todo.id} {...todo} />))
              }
            </div>

        </div>
    );
}
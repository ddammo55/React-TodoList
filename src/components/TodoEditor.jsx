import { useRef, useState, useContext } from 'react';
import './TodoEditor.css'
import { TodoContext  } from '../TodoContext';

export default function TodoEditor() {

    const { onCreate } = useContext(TodoContext);
    //console.log({ onCreate })

    const [content, setContent] = useState('');
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    
    const onClick = () => {
        if(content === '') {
            inputRef.current.focus();
            return;
        }

        onCreate(content);
        setContent('');
    }

    const onKeyDown=(e) => {
        if(e.keyCode === 13) {
            onClick();
        }
    }

    return (
        <div className='TodoEditor'>
                <input 
                value={content}
                onChange={onChangeContent}
                ref={inputRef}
                type="text" 
                onKeyDown={onKeyDown}
                placeholder='새로운 할일 ' />
                <button
                onClick={onClick}
                >추가</button>
        </div>
    );
}
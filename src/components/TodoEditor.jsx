import { useRef, useState } from 'react';
import './TodoEditor.css'

export default function TodoEditor({onCreate}) {
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
        if(e.key === 'Enter') {
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
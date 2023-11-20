import './TodoItem.css'

export default function TodoItem({id, isDone, content, createDate}) {
    return (
        <div className='TodoItem'>
            <input type="checkbox" checked={isDone}/>
           <div className="content">{content}</div>
           <div className="date">{new Date(createDate).toLocaleDateString()}</div>
           <button>삭제</button>
        </div>
    );
}


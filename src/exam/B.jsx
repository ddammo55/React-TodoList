import { useReducer } from "react";

function reducer(state, action) {
    if(action.type === 'DECREMENT'){
        return state - action.data;
    }else if(action.type === 'INCREMENT'){
        return state + action.data;
}
}

export default function B() {

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={()=>{
                dispatch({
                    type: 'DECREMENT',
                    data : 1
                });
            }}>-</button>

            <button onClick={()=>{
                dispatch({
                    type: 'INCREMENT',
                    data : 1
                });
            }}>+</button>
        </div>
    );
}


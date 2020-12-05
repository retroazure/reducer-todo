import React from 'react';

const Todo = (props)=>{

    const {completed, task, id, toggleCompleted} = props;

    return(
        <div className= {'todo' + (completed ? 'completed' : '')}
        onClick = {() => toggleCompleted(id) }>
        {task}
        </div>
    )
}

export default Todo;
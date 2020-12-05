import React from 'react';

const TodoForm = (props) => {

    const {task, addTodo, handleChange, clearCompleted} = props;

    const handleSubmit = event => {
        event.preventDefault();
        addTodo(task);
    }

    const handleClear = event => {
        event.preventDefault;
        clearCompleted();
    }

    return(
            <div>
                <form onSubmit= {handleSubmit}>

                    <input
                    type='text'
                    name='task'
                    value={task}
                    placeholder='Write a todo Task'
                    onChange={handleChange}/>

                    <button type='submit'>Add</button>

                </form>

                <button onClick={handleClear}>
                    Clear Completed
                </button>
            </div>
        )
}

export default TodoForm;
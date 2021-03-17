import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
// import Todo from './Todo';
const ListTodo = (props) => {
    // const{todoList} = 
    return (
        <>
            <section className="main">
                {/* <input type="checkbox" /> */}
                <ul className="todo-list">

                    {props.todoList.map((todo, index) => (
                        <li key={index}>
                            <div className="view">
                                <label className="container">
                                    {todo.isCompleted ? <del> {todo.name}</del> : <label> {todo.name}</label>}
                                    <input type="checkbox"
                                            onChange={() => props.finish(todo.id)}
                                        checked={todo.isCompleted} />
                                    <span className="checkmark"></span>
                                </label>
                                <button
                                    className="destroy"
                                    onClick={() => props.onRemoveTodo(todo.id)} >
                                    <DeleteOutlined />
                                </button>
                            </div>
                        </li>
                    ))}

                </ul>

            </section>
        </>
    )
}
ListTodo.propTypes = {
    onRemoveTodo: PropTypes.func,
    finish: PropTypes.func,
}


export default ListTodo;
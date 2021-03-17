import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) => {

    return (
        <>
            <header  className="header">
                    <h1>  TodoList</h1>
                {/* <div   > */}
                    <input
                        className="new-todo"
                        placeholder="add"
                        value={props.val}
                        onChange={props.handleChange}
                        onKeyUp={(value) => props.onAddTodo(value)}

                    />
                    {/* <button onClick={props.clickAdd} >Add</button> */}
                {/* </div> */}
            </header>


        </>
    )
}
Header.propTypes = {
    onAddTodo: PropTypes.func,
    // clickAdd: PropTypes.func,
    handleChange: PropTypes.func,
    value: PropTypes.string,
}
export default Header;
import React, { useState } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import ListTodo from './component/ListTodo';
// import logo from './logo.svg';
// import './css/todo.css';
import './css/todo.css';

const App = () => {
  let [val, setVal] = useState('');
  let [idTodo, setIdTodo] = useState(1);
  let [status, setStatus] = useState('All');
  let [data, setData] = useState([]);
  const ChangeAdd = (e) => {
    const valueInput = e.target.value;
    setVal(valueInput);
  }
  const handleOnAddTodo = (event) => {
    const checkDuplicate = data.find(v => v.name === val);
    if (event.keyCode === 13 && val) {
      if (!checkDuplicate) {
        setIdTodo(idTodo + 1);
        setData([...data, {
          id: idTodo,
          name: val,
          isCompleted: false,
        }])
      }
      else {
        alert("Công việc này đã có trong list ");
      }
      setVal('');
    }
  }
  const handleRemoveTodo = (idWork) => {
    const removeTodo = data.filter(removeItem => removeItem.id !== idWork);
    setData(removeTodo);
  }

  const finished = (idWork) => {
    const newList = data.map(item => {
      return item.id === idWork ? { ...item, isCompleted: !item.isCompleted } : item;

    });
    setData(newList)
  }

  const setFilterstatusButton = (todos,status) => {
    switch (status) {
      case 'Active':
        return todos.filter(todo => !todo.isCompleted)
      case 'Compeleted':
        return todos.filter(todo => todo.isCompleted)
      default:
        return todos;
    }
  }
  const setStatusFilter = (status) => {
    setStatus(status)
  }


  return (
    <div className="todoapp">
      <Header
        handleChange={ChangeAdd}
        onAddTodo={handleOnAddTodo}
        val={val}
      />
      <ListTodo
        todoList={setFilterstatusButton(data, status)}
        onRemoveTodo={handleRemoveTodo}
        finish={finished}
      />
      <Footer
        setStatusFilter={setStatusFilter}
        status={status}
        numOfTodosLeft={setFilterstatusButton(data).length}
      />
    </div>
  );
}

export default App;

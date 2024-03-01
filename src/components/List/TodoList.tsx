import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addTodo } from '../../slice/todoSlice';
import { AppDispatch, RootState } from '../../store/store';
import styled from 'styled-components';
import TodoItem, { Todo } from '../Item/TodoItem';
import { VisibilityFilter } from '../../slice/visibilityFilterSlice';
import Footer from '../VisibilityFilter/Footer';

const Wrapper = styled.div`
    width: calc(100% - 32px);
`;

const PageMain = styled.div`
    width: 500px;
    padding: 10px 15px;
    display: block;
    border: 1px solid grey;
    border-radius: 10px;
    margin: 0 auto;
`;

const Input = styled.input`
    font-size: 20px;
    padding: 5px;
    float: left;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    border: 1px solid black;
    margin-left: 10px;
`;

const List = styled.ul`
    display: block;
    padding: 0;
    list-style-type: none; 
`;

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter) => {
    switch (filter) {
      case VisibilityFilter.ShowAll:
        return todos;
      case VisibilityFilter.ShowCompleted:
        return todos.filter(t => t.completed);
      case VisibilityFilter.ShowActive:
        return todos.filter(t => !t.completed);
      default:
        throw new Error("Unknown filter: " + filter);
    }
  };


// todoItem 컴포넌트 추가

function TodoList() {
  const todoList = useSelector((state: RootState) => getVisibleTodos(state.todos, state.visibilityFilter));
  const dispatch = useDispatch<AppDispatch>();

  // console.log(dispatch);

  const [txt, setTxt] = useState('');
  return (
    <Wrapper>
        <PageMain>
          <h1 className='todolist'>Todo List</h1>
          <div className='todolist-list'>
            <Input
              type="text"
              onChange={(e) => setTxt(e.target.value)}
              id="standard-basic"
              placeholder="todo Input"
              value={txt}
            />
            <Button
              onClick={(e) => {
                dispatch(addTodo(txt));
                setTxt('');
                console.log(e);
              }}
            >
              ADD
            </Button>
          </div>
          <div className='todolist-lists'>
            <List>
              {todoList.map((item) => (
                <TodoItem todo={item} />
              ))}
            </List>
          </div>
          <Footer />
        </PageMain>
    </Wrapper>
  );
}

export default TodoList;
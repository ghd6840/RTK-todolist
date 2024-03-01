import React from 'react';

import { useDispatch } from 'react-redux';

import { deleteTodo, toggleTodo } from '../../slice/todoSlice';
import { AppDispatch } from '../../store/store';
import styled from "styled-components";

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoProps {
    completed: boolean;
    text: string;
    onClick: () => any;
}

const ListItem = styled.li`
    margin: 10px 0;
    padding: 10px 15px;
    border: 1px solid grey;
    border-radius: 10px;
    background: white;
    cursor: pointer;
    display: block;
    :hover {
        background: lightgrey;
    }
`;

function TodoListItem({ completed, text, onClick }: TodoProps) {
    return (
      <div
        onClick={onClick}
        style={{
          textDecoration: completed ? "line-through" : "none",
          display: 'inline-block',
          width: '85%'
        }}
      >
        {text}
      </div>
    );
  }

function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch<AppDispatch>();
  return (
        <ListItem
          key={todo.id}
        >
          <TodoListItem key={todo.id}
            {...todo}
            onClick={() => dispatch(toggleTodo(todo))}
          />
          <div style={{ float: 'right', cursor: 'pointer' }} 
          // dispatch 추가
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}>Delete</div>
        </ListItem>
  );
}

export default TodoItem;
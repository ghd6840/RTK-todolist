import React from 'react';

import { useDispatch } from 'react-redux';

import { deleteTodo } from '../../slice/todoSlice';
import { AppDispatch } from '../../store/store';
import styled from "styled-components";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
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

function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch<AppDispatch>();
  return (
        <ListItem
          key={todo.id}
          // dispatch 추가
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        >
          {todo.text}{' '}
          <div style={{ float: 'right', cursor: 'pointer' }}>Delete</div>
        </ListItem>
  );
}

export default TodoItem;
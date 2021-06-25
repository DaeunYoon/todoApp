import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}

      <script src="/__/firebase/8.6.8/firebase-app.js"></script>
    </div>
  );
};

export default React.memo(TodoList);

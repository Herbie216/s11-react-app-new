import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" data-testid="/">Home</Link>
        </li>
        <li>
          <Link to="/shopping-list" data-testid="shopping-link">Shopping List</Link>
        </li>
        <li>
          <Link to="/todo-list" data-testid="todo-list">Todo List</Link> 
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import ShoppingList from './ShoppingList';
import TodoList from './TodoList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My List App</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
            <Route path="/todo-list" element={<TodoList />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('todoList')) || [];
        setItems(storedItems);
    }, []);

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(items));
    }, [items]);

    const addItem = (itemName) => {
        const newItems = [...items, { id: Date.now(), name: itemName }];
        setItems(newItems);
    };

    const toggleItem = (itemId) => {
        setCheckedItems(prevCheckedItems => ({
            ...prevCheckedItems,
            [itemId]: !prevCheckedItems[itemId]
        }));
    };

    const removeCheckedItems = () => {
        const filteredItems = items.filter(item => !checkedItems[item.id]);
        setItems(filteredItems);
        setCheckedItems({});
    };

    return (
        <div>
            <h2 data-testid="todo-list-header">Todo List</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const itemName = e.target.elements.itemName.value;
                    if (itemName.trim() !== '') {
                        addItem(itemName);
                        e.target.elements.itemName.value = '';
                    }
                }}
            >
                <input type="text" name="itemName" placeholder="Enter Todo Here" />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        style={{ textDecoration: checkedItems[item.id] ? 'line-through' : 'none' }}
                    >
                        <input
                            type="checkbox"
                            checked={checkedItems[item.id] || false}
                            onChange={() => toggleItem(item.id)}
                        />
                        {item.name}
                    </li>
                ))}
            </ul>
            <button onClick={removeCheckedItems}>Finished!</button>
        </div>
    );
};

export default TodoList;

import React, { useState, useEffect } from 'react';

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('shoppingList'));
        if (storedItems) {
            setItems(storedItems);
        }
    }, []); 

    useEffect(() => {
        localStorage.setItem('shoppingList', JSON.stringify(items));
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

    const resetCheckedItems = () => {
        setCheckedItems({});
    };

    return (
        <div>
            <h2 data-testid="shopping-list-header">Shopping List</h2>
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
                <input type="text" name="itemName" placeholder="Enter item name" />
                <button type="submit">Add Item</button>
            </form>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        style={{ textDecoration: checkedItems[item.id] ? 'line-through' : 'none' }}
                    >
                        <input
                            type="checkbox"
                            name="itemName"
                            checked={checkedItems[item.id] || false}
                            onChange={() => toggleItem(item.id)}
                        />
                        {item.name}
                    </li>
                ))}
            </ul>
            <button onClick={resetCheckedItems}>Done Shopping</button>
        </div>
    );
};

export default ShoppingList;

'use client';
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ list, toggleComplete, startEdit, deleteItem }) => (
    <div className="bg-gray-100 p-5 rounded-lg">
        {list.length > 0 ? (
            list.map((item, index) => (
                <TodoItem
                    key={item.id}
                    item={item}
                    index={index}
                    toggleComplete={toggleComplete}
                    startEdit={startEdit}
                    deleteItem={deleteItem}
                />
            ))
        ) : (
            <div className="text-center text-lg text-gray-500">
                No items in the list
            </div>
        )}
    </div>
);

export default TodoList;
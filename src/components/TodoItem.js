'use client';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ item, index, toggleComplete, startEdit, deleteItem }) => (
    <div className="flex justify-between items-center mb-3 text-black">
        <input
            type="checkbox"
            className="size-4 mx-3"
            checked={item.completed}
            onChange={() => toggleComplete(index)}
        />
        <span className={`text-lg flex-grow ${item.completed ? 'line-through' : ''}`}>
            {item.value}
        </span>
        <span>
            <button
                className="p-2 bg-red-500 text-white rounded-lg mr-2 hover:bg-red-600"
                onClick={() => deleteItem(item.id)}
            >
                <FontAwesomeIcon icon={faTrash} size="sm" style={{color: "#000000",}} />
            </button>
            <button
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => startEdit(index)}
            >
                <FontAwesomeIcon icon={faPenToSquare} style={{color: "#000000",}} />
            </button>
        </span>
    </div>
);

export default TodoItem;
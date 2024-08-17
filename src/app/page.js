'use client';
import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import TodoList from '../components/TodoList';

const page = () => {
    const [userInput, setUserInput] = useState('');
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const updateInput = (value) => setUserInput(value);

    const handleAction = () => {
        if (userInput.trim() === '') return;

        if (editIndex !== null) {
            const updatedList = list.map((item, index) =>
                index === editIndex ? { ...item, value: userInput } : item
            );
            setList(updatedList);
            setEditIndex(null);
        } else {
            const newItem = {
                id: Math.random(),
                value: userInput,
                completed: false,
            };
            setList([...list, newItem]);
        }

        setUserInput('');
    };

    const toggleComplete = (index) => {
        const updatedList = list.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item
        );
        setList(updatedList);
    };

    const deleteItem = (id) => {
        const updatedList = list.filter((item) => item.id !== id);
        setList(updatedList);
    };

    const startEdit = (index) => {
        setUserInput(list[index].value);
        setEditIndex(index);
    };

    return (
        <div className="font-sans max-w-lg mx-auto p-5 h-screen">
            <div className="text-center text-2xl font-bold mb-5">
                TODO LIST
            </div>
            <InputForm
                userInput={userInput}
                editIndex={editIndex}
                updateInput={updateInput}
                handleAction={handleAction}
            />
            <TodoList
                list={list}
                toggleComplete={toggleComplete}
                startEdit={startEdit}
                deleteItem={deleteItem}
            />
        </div>
    );
};

export default page;
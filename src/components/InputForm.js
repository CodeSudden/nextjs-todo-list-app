'use client';
import React from 'react';

const InputForm = ({ userInput, editIndex, updateInput, handleAction }) => (
    <div className="flex items-center mb-5">
        <input
            className="text-lg p-2 mr-2 flex-grow rounded border border-gray-300 text-black"
            placeholder={editIndex !== null ? "Edit item..." : "Add item..."}
            value={userInput}
            onChange={(e) => updateInput(e.target.value)}
        />
        <button
            className="text-lg p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            onClick={handleAction}
        >
            {editIndex !== null ? 'Update' : <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>}
        </button>
    </div>
);

export default InputForm;

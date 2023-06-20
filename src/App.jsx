import React, { useState } from 'react';
import InputComponent from "./Components/Input";
import CharacterCountComponent from "./Components/CharacterCountComponent.jsx";

const App = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <InputComponent value={inputValue} onChange={handleChange} />
            <CharacterCountComponent inputValue={inputValue} />
        </div>
    );
};

export default App;

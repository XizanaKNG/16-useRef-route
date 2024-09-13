import React, {useState, useRef } from 'react';

const App2 = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const nameInputRef = useRef(null);

    const surnameInputRef = useRef(null);

    console.log(nameInputRef.current)

    console.log(surnameInputRef.current)

    const handleKeyUp1 = (e) => {
        if (e.key === "Enter") {
            surnameInputRef.current.focus();
        }
    };

    const handleKeyUp2 = (e) => {
        if (e.key === "Enter") {
            nameInputRef.current.focus();
        }
    };

  return (
    <div>
        <form>
            <label htmlFor="myName">Name</label>
            <input
                id="myName"
                ref={nameInputRef}
                type="text" 
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyUp={handleKeyUp1}
            />
            <br />
            <label htmlFor="mySurname">Surname</label>
            <input
                id="mySurname"
                ref={surnameInputRef}
                type="text" 
                placeholder="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                onKeyUp={handleKeyUp2}
            />
        </form>
    </div>
  )
}

export default App2
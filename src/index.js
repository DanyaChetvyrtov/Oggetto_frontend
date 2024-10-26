import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from "./API/store/store";

const store = new Store();

const events = [
    {description: 'взять кейс', rules: 'Нельзя брать кейс джунов',
        date: '26-10-2024', type: 'одиночное'},
    {description: 'попытаться подонять фронт', rules: 'Нельзя брать кейс джунов',
        date: '26-10-2024', type: 'командное'},
    {description: 'влепить костыли', rules: 'Нельзя брать кейс джунов',
        date: '26-10-2024', type: 'командное'},
    {description: 'молиться, что хоть что-то будет работать', rules: 'Нельзя брать кейс джунов',
        date: '26-10-2024', type: 'одиночное'},
    {description: 'взять кейс', rules: 'Нельзя брать кейс джунов',
        date: '26-10-2024', type: 'одиночное'},
]

export const Context = createContext({
    store, events
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{ store,events }}>
        <App />
    </Context.Provider>
);

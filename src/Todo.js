import React, { useState } from "react";

export default function Todo(props) {
    const [newName, setNewName] = useState("");
    const [newDue, setNewDue] = useState("");
    const [items, setItems] = useState(props.items);
    return(
        <div>
            <h1>Todo List</h1>
            {
                items.map((item) => { return <li key ={item.id}>{item.name}, {item.due}</li>})
            }
        </div>
    )
}
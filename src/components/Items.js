import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import {useState} from 'react';

const Items = ({items, addToBasket}) => {

    const [selectedItem, setSelectedItem] = useState ([]);

    const handleSelectedItem = (event)=>{
        setSelectedItem(event.target.value)
       }

    const handleButtonClick= (event)=>{
        
        event.preventDefault();
        handleSelectedItem(event)
        addToBasket(selectedItem)
        setSelectedItem("")  
        
    };


  
   

    const ListItems = items.map((item, index) =>{
        return (
        
        <li key={index}> Name: {item.name} £{item.price} Description: {item.description} 
        <button id="item.name" value={item} onClick={handleSelectedItem}>Add to basket</button></li>
        )


    })

    
    return (
        <div>
            <h2> Christmas Necessities</h2>
            <ul>
                {ListItems}
            </ul>
        </div>
    )
};

export default Items;

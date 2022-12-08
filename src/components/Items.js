import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import {useState} from 'react';

const Items = ({items, handleSelectedItem}) => {

    

    const handleClick= (event, item)=>{
        
        event.preventDefault();
        handleSelectedItem(item) 
        
    };

    const ListItems = items.map((item, index) =>{
        return (
        
        <li key={index}> Name: {item.name} £{item.price} Description: {item.description} 
        <button id="item.name" value={item} onClick={(e)=>handleClick(e, item)}>Add to basket</button></li>
        );


    });

    
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

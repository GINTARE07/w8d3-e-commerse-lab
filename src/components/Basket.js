import React from "react";

const Basket = ({basketList}) => {
    const displayBasketList = basketList.map((item, index) =>{
        return (
        
        <li key={index}> Name: {item.name} £{item.price} Description: {item.description} 
       </li>
        )
        });

    return (
        <div>
            <h3> This is what you have in your Basket:</h3>
            <ul>{displayBasketList}</ul>
        </div>
    );
 };

export default Basket;

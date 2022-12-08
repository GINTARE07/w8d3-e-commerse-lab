import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Items from './components/Items';
import Basket from './components/Basket';
import NavBar from './components/NavBar';

function App() {

  let items = [
    {name: "Ginger bread", price: 2.50, description: "edible"},
    {name: "Christmas Tree", price: 22.50, description: "non-edible"},
    {name: "Stollen", price: 3.50, description: "edible"},
    {name: "Fairy lights", price: 2.50, description: "non-edible"},
    {name: "Mulled wine", price: 12.50, description: "edible"}

  ];



  const [itemList, setItemList] = useState (items);
  const [selectedItem, setSelectedItem] = useState (null);
  const [basketList, setBasketList] = useState ([]);

    const addToBasket = (item)=>{
      if (item!== null){
      let newBasketList = [...basketList]
      newBasketList.push(item)
      setBasketList(newBasketList)
      setSelectedItem(null)
    };
};

  useEffect(()=> {
    addToBasket(selectedItem)
  }, [selectedItem]);

const handleSelectedItem=(item)=> {
  setSelectedItem(item)
};

  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/items" element={< Items items ={itemList} handleSelectedItem={handleSelectedItem}/>}/>

          <Route path="/basket" element={< Basket basketList={basketList}/>} />
        </Routes>
 
    </Router>
    
  );
}


export default App;

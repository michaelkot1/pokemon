import React, { useState } from 'react';
import './ItemStore.css';

type Item = {
  id: number;
  name: string;
  cost: number;
  description: string;
};

const ITEM_LIST: Item[] = [
  {
    id: 1,
    name: 'Potion',
    cost: 200,
    description: "Restores a Pokemon's HP by 20 points.",
  },
  {
    id: 2,
    name: 'Super Potion',
    cost: 700,
    description: "Restores a Pokemon's HP by 50 points.",
  },
  {
    id: 3,
    name: 'Revive',
    cost: 1500,
    description: "Revives a fainted Pokemon with half its max HP.",
  },
  {
    id: 4,
    name: 'Max Revive',
    cost: 4000,
    description: 'Revives a fainted Pokemon with full HP.',
  },
  {
    id: 5,
    name: 'Elixir',
    cost: 900,
    description: "Restores 10 PP for each of a Pokemon's moves.",
  },
];

const ItemStore: React.FC = () => {
  const [cartItems, setCartItems] = useState<Map<number, number>>(new Map());
  const [cartTotal, setCartTotal] = useState<number>(0);

  const addToCart = (itemId: number, quantity: number) => {
    const newCartItems = new Map(cartItems);
    newCartItems.set(itemId, (newCartItems.get(itemId) || 0) + quantity);
    setCartItems(newCartItems);
    setCartTotal(
      cartTotal +
      (ITEM_LIST.find((item) => item.id === itemId)?.cost || 0) * quantity
    );
  };

  return (
    <div className="item-store">
      <h2>Item Store</h2>
      <p>This is where you can buy items for your pokemon</p>
      <div className="item-list">
        {ITEM_LIST.map((item) => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>Cost: {item.cost} Pokecoins</p>
            <p>{item.description}</p>
            <button onClick={() => addToCart(item.id, 1)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h3>Cart</h3>
        {cartItems.size === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {Array.from(cartItems).map(([itemId, quantity]) => (
              <p key={itemId}>
                {ITEM_LIST.find((item) => item.id === itemId)?.name} x{quantity}
              </p>
            ))}
            <p>Total Cost: {cartTotal} Pokecoins</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemStore;

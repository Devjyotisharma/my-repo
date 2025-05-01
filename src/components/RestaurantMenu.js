import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

function RestaurantMenu() {
  const {resId} = useParams();

  const resMenu = useRestaurantMenu(resId);
  if (resMenu === null) {
    return <Shimmer/>
  }

  return (
    <div className="menu">
      <h1>{resMenu.cards[2].card.card.info.name}</h1>
      <h2>Menu</h2>
      <ul>
        {
          resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map((item) => {
            return <li key={item.card.info.id}>{item.card.info.name}</li>
          })
        }
      </ul>

    </div>

  )
}

export default RestaurantMenu
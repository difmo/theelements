'use client'

import React, { useState } from "react";

const AnimatedMenu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, label: "Unleash Full Potential", hidden: false },
    { id: 2, label: "Elevate Care Outcomes", hidden: false },
    { id: 3, label: "Build Zero Touch Experiences", hidden: false },
    { id: 4, label: "Hidden Menu", hidden: true },
  ]);

  const handleMenuClick = (id) => {
    const clickedIndex = menuItems.findIndex((item) => item.id === id);
    const updatedMenu = menuItems.map((item, index) => {
      if (index === clickedIndex) {
        return { ...item, hidden: true }; // Make clicked item hidden
      }
      if (item.hidden) {
        return { ...item, hidden: false }; // Show the hidden menu item
      }
      return item;
    });

    const reorderedMenu = [
      ...updatedMenu.slice(clickedIndex + 1),
      ...updatedMenu.slice(0, clickedIndex + 1),
    ];

    setMenuItems(reorderedMenu);
  };

  return (
    <div className="relative flex flex-col items-center space-y-4">
      {menuItems.map((item, index) => (
        <div
          key={item.id}
          onClick={() => handleMenuClick(item.id)}
          className={`p-4 text-center w-64 rounded-lg cursor-pointer transition-all duration-500 ${
            item.hidden ? "opacity-0 scale-75" : "opacity-100 scale-100"
          } ${item.hidden ? "hidden" : "block"} bg-orange-200 hover:bg-orange-300`}
          style={{
            transform: `translateX(${item.hidden ? -100 : 0}px)`, // Slide out for hidden items
            transition: item.hidden ? "transform 0.5s ease-out" : "none", // Apply sliding effect on hidden items
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default AnimatedMenu;

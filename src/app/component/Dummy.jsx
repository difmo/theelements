'use client'

import React, { useState, useEffect } from "react";

const AnimatedMenu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, label: "Unleash Full Potential", hidden: false, bgColor: "red" },
    { id: 2, label: "Elevate Care Outcomes", hidden: false, bgColor: "blue" },
    { id: 3, label: "Build Zero Touch Experiences", hidden: false, bgColor: "green" },
    { id: 4, label: "Hidden Menu", hidden: true, bgColor: "orange" },
  ]);

  const [tappedItem, setTappedItem] = useState(null);

  const handleMenuClick = (id) => {
    const clickedIndex = menuItems.findIndex((item) => item.id === id);
    const updatedMenu = menuItems.map((item, index) => {
      if (index === clickedIndex) {
        return { ...item, hidden: true }; // Hide clicked item
      }
      if (item.hidden) {
        return { ...item, hidden: false }; // Show hidden menu item
      }
      return item;
    });

    // Reorder menu based on click
    const reorderedMenu = [
      ...updatedMenu.slice(clickedIndex + 1),
      ...updatedMenu.slice(0, clickedIndex + 1),
    ];

    setMenuItems(reorderedMenu);
  };

  const handleTap = (id) => {
    setTappedItem(id);
    setTimeout(() => setTappedItem(null), 300); // Reset the tapped state after animation
  };

  useEffect(() => {
    const items = document.querySelectorAll(".menu-item");
    items.forEach((item) => {
      item.style.transition = "transform 0.5s ease, opacity 0.5s ease, width 0.5s ease";
    });
  }, [menuItems]);

  return (
    <div className="relative flex flex-col items-center space-y-4">
      {menuItems.map((item, index) => (
        <div
          key={item.id}
          onClick={() => {
            handleMenuClick(item.id);
            handleTap(item.id); // Trigger the tap effect on click
          }}
          className={`menu-item p-4 text-center rounded-lg cursor-pointer transition-all duration-500 ${
            item.hidden ? "opacity-0 scale-75 -translate-x-full w-0" : "opacity-100 scale-100 translate-x-0 w-64"
          } ${tappedItem === item.id ? "scale-110 transform transition-all duration-300" : ""} ${item.hidden ? "hidden" : "block"}`}
          style={{
            backgroundColor: item.bgColor, // Dynamically set background color
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default AnimatedMenu;

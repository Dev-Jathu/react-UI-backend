import React, { useState } from 'react';

function ColorChanger() {
  // State to manage the color
  const [color, setColor] = useState('white');

  // Function to handle button click and change color
  const changeColor = () => {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <div style={{ backgroundColor: color, width: '100%', height: '100vh' }}></div>
    </div>
  );
}

export default ColorChanger;

import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (val: string) => {
    setColor(val);
  };

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
        <label>Select a color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ColorPicker;

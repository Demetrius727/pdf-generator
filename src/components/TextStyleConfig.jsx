import React from "react";

const TextStyleConfig = ({
  fontSize,
  setFontSize,
  fontColor,
  setFontColor,
  isBold,
  setIsBold,
}) => {
  return (
    <div className="text-style">
      <label className="config-label">
        Font Size: <input type="text" className="input" value={fontSize} onchange={(e) => setFontSize(e.target.value)}/>
      </label>
      <label className="config-label">
        Font Color: <input type="color" className="color-picker" value={fontColor} onchange={(e) => setFontColor(e.target.value)}/>
      </label>
      <label className="config-label">
        Bold: <input type="checkbox" value={isBold} onchange={(e) => setIsBold(e.target.value)}/>
      </label>
    </div>
  );
};

export default TextStyleConfig;

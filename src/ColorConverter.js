// ColorConverter.js
import React, { useState } from "react";

const ColorConverter = () => {
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });
  const [cmyk, setCmyk] = useState({ c: 0, m: 0, y: 0, k: 0 });

  const rgbToCmyk = ({ r, g, b }) => {
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;

    const k = 1 - Math.max(rNorm, gNorm, bNorm);
    const c = (1 - rNorm - k) / (1 - k) || 0;
    const m = (1 - gNorm - k) / (1 - k) || 0;
    const y = (1 - bNorm - k) / (1 - k) || 0;

    return {
      c: Math.round(c * 100),
      m: Math.round(m * 100),
      y: Math.round(y * 100),
      k: Math.round(k * 100),
    };
  };

  const cmykToRgb = ({ c, m, y, k }) => {
    const r = 255 * (1 - c / 100) * (1 - k / 100);
    const g = 255 * (1 - m / 100) * (1 - k / 100);
    const b = 255 * (1 - y / 100) * (1 - k / 100);

    return {
      r: Math.round(r),
      g: Math.round(g),
      b: Math.round(b),
    };
  };

  const handleRgbChange = (e) => {
    const { name, value } = e.target;
    const newRgb = { ...rgb, [name]: Math.min(255, Math.max(0, Number(value))) };
    setRgb(newRgb);
    setCmyk(rgbToCmyk(newRgb));
  };

  const handleCmykChange = (e) => {
    const { name, value } = e.target;
    const newCmyk = { ...cmyk, [name]: Math.min(100, Math.max(0, Number(value))) };
    setCmyk(newCmyk);
    setRgb(cmykToRgb(newCmyk));
  };

  return (
    <div>
      <h2>RGB → CMYK Converter</h2>
      <div>
        <h3>RGB</h3>
        <label>
          R:
          <input type="number" name="r" value={rgb.r} onChange={handleRgbChange} />
        </label>
        <label>
          G:
          <input type="number" name="g" value={rgb.g} onChange={handleRgbChange} />
        </label>
        <label>
          B:
          <input type="number" name="b" value={rgb.b} onChange={handleRgbChange} />
        </label>
      </div>
      <div>
        <h3>CMYK</h3>
        <label>
          C:
          <input type="number" name="c" value={cmyk.c} onChange={handleCmykChange} />
        </label>
        <label>
          M:
          <input type="number" name="m" value={cmyk.m} onChange={handleCmykChange} />
        </label>
        <label>
          Y:
          <input type="number" name="y" value={cmyk.y} onChange={handleCmykChange} />
        </label>
        <label>
          K:
          <input type="number" name="k" value={cmyk.k} onChange={handleCmykChange} />
        </label>
      </div>
    </div>
  );
};

export default ColorConverter;

import "./RangeFilter.css";
export default function RangeFilter({
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
  minPrice,
  maxPrice,
}) {
  return (
    <div className="rangeContainer">
      <h2>Filter by Price</h2>
      <div className="range">
        <label>From: {minValue}</label>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={minValue}
          onChange={(e) => setMinValue(Number(e.target.value))}
        />
      </div>

      <div className="range">
        <label>To: {maxValue}</label>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

import React from 'react';

function Filtre({ onTitleChange, onRatingChange }) {
  return (
    <div className="filtre">
      <input
        type="text"
        placeholder="Filtrer par titre"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        min="0"
        max="10"
        onChange={(e) => onRatingChange(e.target.value)}
      />
    </div>
  );
}

export default Filtre;

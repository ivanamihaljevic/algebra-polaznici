import React from 'react';

export default function User({ name, years, onNameChange, onDelete }) {
  return (
    <div>
      <p onClick={onDelete}>
        Pozdrav, moje ime je {name} i imam {years} godina.
      </p>
      <input
        type="text"
        onChange={onNameChange}
        value={name}
        disabled={!onNameChange}
      />
    </div>
  );
}

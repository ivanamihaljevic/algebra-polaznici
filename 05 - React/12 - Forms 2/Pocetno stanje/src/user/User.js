import React from 'react';

export default function User({ name, years, onNameChange }) {
  return (
    <div>
      <p>
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

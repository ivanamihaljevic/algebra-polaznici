import React from 'react';

export default function UserChildren({ name, years, children }) {
  return (
    <div>
      <p>
        Pozdrav, moje ime je {name} i imam {years} godina.
      </p>
      <p>{children}</p>
    </div>
  );
}

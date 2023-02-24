import React from 'react';

// children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component.

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

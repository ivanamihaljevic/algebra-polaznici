import React from 'react';

import Person from './Person';
import { sum } from './util';
import { num1, num2 } from './util';

import Prs from './Person';
import { sum as zbroj } from './util';
import * as ALL from './util';

export default function App() {
  return (
    <div>
      <p>{Person.name}</p>
      <p>{sum(5, 3)}</p>
      <p>{sum(num1, num2)}</p>

      <h2>{Prs.name}</h2>
      <h2>{zbroj(6, 5)}</h2>
      <h2>{ALL.sum(ALL.num1, ALL.num2)}</h2>
    </div>
  );
}

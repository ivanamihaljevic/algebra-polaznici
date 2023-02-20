import React from "react";
import {
  Komponenta1,
  Komponenta2,
  Komponenta3,
  Komponenta4,
} from "./Components";
import { BigTitle, SmallTitle } from "./Components/Title";

export default function App() {
  return (
    <div>
      <BigTitle></BigTitle>
      <SmallTitle></SmallTitle>
      <Komponenta1></Komponenta1>
      <Komponenta2></Komponenta2>
      <Komponenta3></Komponenta3>
      <Komponenta4></Komponenta4>
    </div>
  );
}

import React from "react";
import { Element } from "react-scroll";
import "./App.css";
import ScrollerHeader from "./ScrollerHeader";

export default function Section() {
  return (
    <>
      <ScrollerHeader />
      <Element name="mostloved" id="mostloved" className="element">
        Most Loved
      </Element>

      <Element name="combo" id="combo" className="element">
        Combo
      </Element>

      <Element name="alldaybreakfast" id="alldaybreakfast" className="element">
        All Day Breakfast
      </Element>

      <Element name="lunch/dinner" id="lunch/dinner" className="element">
        Lunch/Dinner
      </Element>

      <Element name="fruitbowls" id="fruitbowls" className="element">
        Fruit Bowls
      </Element>

      <Element name="juices" id="juices" className="element">
        Juices
      </Element>

      <Element name="salads" id="salads" className="element">
        Salads
      </Element>

      <Element name="sandwiches" id="sandwiches" className="element">
        Sandwiches
      </Element>
    </>
  );
}

import React from "react";
import { Element } from "react-scroll";
import "./App.css";
import ScrollerHeader from "./ScrollerHeader";

export default function Section() {
  return (
    <div>
      <ScrollerHeader />
      <Element name="test1" id="test1" className="element">
        test 1
      </Element>

      <Element name="test2" id="test2" className="element">
        test 2
      </Element>

      <Element name="test3" id="test3" className="element">
        test 3
      </Element>

      <Element name="test4" id="test4" className="element">
        test 4
      </Element>

      <Element name="test5" id="test5" className="element">
        test 5
      </Element>

      <Element name="test6" id="test6" className="element">
        test 6
      </Element>

      <Element name="test7" id="test7" className="element">
        test 7
      </Element>

      <Element name="test8" id="test8" className="element">
        test 8
      </Element>

      <Element name="test9" id="test9" className="element">
        test 9
      </Element>

      <Element name="test10" id="test10" className="element">
        test 10
      </Element>

      <Element name="test11" id="test11" className="element">
        test 11
      </Element>

      <Element name="test12" id="test12" className="element">
        test 12
      </Element>
    </div>
  );
}

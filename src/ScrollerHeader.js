/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "./ScrollerHeader.css";

export default function ScrollerHeader() {
  useEffect(() => {
    const slider = document.querySelector(".container-fluid");
    const lists = document.querySelectorAll(".container-fluid li a");
    console.log(lists);
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      // console.log(walk);
    });
    window.addEventListener("scroll", () => {
      var activeElement = document.querySelector(".active");
      activeElement.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "center",
      });
    });

    lists.forEach((list) => {
      list.addEventListener("click", () => {
        list.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "center",
        });
      });
    });
  });

  return (
    <nav className="navbar-fixed-top">
      <ul className="container-fluid">
        <li>
          <Link
            className="test1 test"
            to="test1"
            spy={true}
            smooth={true}
            duration={500}
          >
            Test 1
          </Link>
        </li>
        <li>
          <Link
            className="test2 test"
            to="test2"
            spy={true}
            smooth={true}
            duration={500}
          >
            Test 2
          </Link>
        </li>
        <li>
          <Link
            className="test3 test"
            to="test3"
            spy={true}
            smooth={true}
            duration={500}
          >
            Test 3
          </Link>
        </li>
        <li>
          <Link
            className="test4 test"
            to="test4"
            spy={true}
            smooth={true}
            duration={500}
          >
            Test 4
          </Link>
        </li>
        <li>
          <Link
            className="test5 test"
            to="test5"
            spy={true}
            smooth={true}
            duration={500}
          >
            Test 5
          </Link>
        </li>

        <li>
          <Link
            className="test6 test"
            to="test6"
            spy={true}
            smooth={true}
            duration={500}
          >
            Test 6
          </Link>
        </li>

        <li>
          <Link
            className="test7 test"
            to="test7"
            spy={true}
            smooth={true}
            duration={500}
          >
            Test 7
          </Link>
        </li>

        <li>
          <Link
            className="test8 test"
            to="test8"
            spy={true}
            smooth={true}
            duration={500}
          >
            Test 8
          </Link>
        </li>

        <li>
          <Link
            className="test9 test"
            to="test9"
            spy={true}
            smooth={true}
            duration={500}
          >
            Test 9
          </Link>
        </li>

        <li>
          <Link
            className="test10 test"
            to="test10"
            spy={true}
            smooth={true}
            duration={500}
          >
            Test 10
          </Link>
        </li>

        <li>
          <Link
            className="test11 test"
            to="test11"
            spy={true}
            smooth={true}
            duration={500}
          >
            Test 11
          </Link>
        </li>

        <li>
          <Link
            className="test12 test"
            to="test12"
            spy={true}
            smooth={true}
            duration={500}
          >
            Test 12
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// onscroll = function () {
//   var scrollPosition = document.documentElement.scrollTop;

//   sections.forEach((section) => {
//     if (
//       scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
//       scrollPosition <
//         section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
//     ) {
//       var currentId = section.attributes.id.value;
//       // console.log(currentId);
//       // removeAllActiveClasses();
//       // addActiveClass(currentId);
//     } else if (
//       scrollPosition ==
//       section.offsetTop + section.offsetHeight - window.innerHeight
//     ) {
//       // console.log("Page Bottom");
//       // removeAllActiveClasses();
//       // const lastIndex = document.querySelectorAll("ul li a");
//       // lastIndex[lastIndex.length - 1].classList.add("active");
//     }
//   });
// };

// var removeAllActiveClasses = function () {
//   document.querySelectorAll("ul li a").forEach((el) => {
//     el.classList.remove("active");
//   });
// };

// var addActiveClass = function (id) {
//   console.log(id);
//   var selector = `ul li a[href="#${id}"]`;
//   console.log(selector);
//   document.querySelector(selector).classList.add("active");
//   document
//     .querySelector(selector)
//     .scrollIntoView({ behavior: "smooth", inline: "center" });
// };

// var navLinks = document.querySelectorAll("ul li a");
// console.log(navLinks);

// navLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     var currentId = e.target.attributes.href.value;
//     console.log(currentId);
//     var section = document.querySelector(currentId);
//     var sectionPos = section.offsetTop;
//     console.log(sectionPos);
//     section.scrollIntoView({ behavior: "smooth", inline: "center" });

//     window.scroll({
//       top: sectionPos,
//       behavior: "smooth",
//     });
//   });
// });

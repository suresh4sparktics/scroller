/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "./ScrollerHeader.css";

export default function ScrollerHeader() {
  useEffect(() => {
    const slider = document.querySelector(".menu-wrapper");
    const lists = document.querySelectorAll(".menu-item");
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
      console.log(activeElement);
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "center",
        });
      }
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
    <>
      <div className="navbar-fixed-top menu-wrapper">
        <div className="menu-item">
          <Link
            className="test"
            to="mostloved"
            spy={true}
            smooth={true}
            duration={500}
          >
            Most Loved
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="combo"
            spy={true}
            smooth={true}
            duration={500}
          >
            Combo
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="alldaybreakfast"
            spy={true}
            smooth={true}
            duration={500}
          >
            All Day Breakfast
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="lunch/dinner"
            spy={true}
            smooth={true}
            duration={500}
          >
            Lunch/Dinner
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="fruitbowls"
            spy={true}
            smooth={true}
            duration={500}
          >
            Fruit Bowls
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="juices"
            spy={true}
            smooth={true}
            duration={500}
          >
            Juices
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="salads"
            spy={true}
            smooth={true}
            duration={500}
          >
            Salads
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="sandwiches"
            spy={true}
            smooth={true}
            duration={500}
          >
            SandWiches
          </Link>
        </div>
      </div>
    </>
  );
}

{
  /* <nav className="navbar-fixed-top">
        <ul className="container-fluid">
          <li>
            <Link
              className="test"
              to="mostloved"
              spy={true}
              smooth={true}
              duration={500}
            >
              Most Loved
            </Link>
          </li>
          <li>
            <Link
              className="test"
              to="combo"
              spy={true}
              smooth={true}
              duration={500}
            >
              Combo
            </Link>
          </li>
          <li>
            <Link
              className="test"
              to="alldaybreakfast"
              spy={true}
              smooth={true}
              duration={500}
            >
              All Day Breakfast
            </Link>
          </li>
          <li>
            <Link
              className="test"
              to="lunch/dinner"
              spy={true}
              smooth={true}
              duration={500}
            >
              Lunch/Dinner
            </Link>
          </li>
          <li>
            <Link
              className="test"
              to="fruitbowls"
              spy={true}
              smooth={true}
              duration={500}
            >
              Fruit Bowls
            </Link>
          </li>
          <li>
            <Link
              className="test"
              to="juices"
              spy={true}
              smooth={true}
              duration={500}
            >
              Juices
            </Link>
          </li>

          <li>
            <Link
              className="test"
              to="salads"
              spy={true}
              smooth={true}
              duration={500}
            >
              Salads
            </Link>
          </li>

          <li>
            <Link
              className="test"
              to="sandwiches"
              spy={true}
              smooth={true}
              duration={500}
            >
              SandWiches
            </Link>
          </li>
        </ul>
      </nav> */
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

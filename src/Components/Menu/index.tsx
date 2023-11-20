"use client";
import React, { useState } from "react";

//NEXT IMPORTS
import { useRouter } from 'next/navigation'
import Link from "next/link";

//STYLE
import "./style.scss";

//ICONS IMPORT  
import { IoMdMenu } from "react-icons/io";
import { LuCoffee } from "react-icons/lu";
import { FiLogIn } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";



//THIS MENU IS PART OF THE GLOBAL LAYOUT
const Menu = () => {

  //ROUTING
  const router = useRouter()
  
  //SIDE BAR FLAG
  const [menuLateral, setMenuLateral] = useState(false);
  //I need to create a second flag to watch for what stage it is before the moment they take of the element from DOM
  const [opening, setOpening] = useState(false);

  return (
    <nav className="menu">
      <button
        className="button headerButton"
        onClick={() => {
          setMenuLateral(!menuLateral);
          setOpening(!opening);
        }}
      >
        <IoMdMenu />
        Menu
      </button>
      <div className="logo">
      <Link href="/home">
        <LuCoffee />
        The News
        </Link>
      </div>
      <button className="button headerButton Login" onClick={() => router.push('/page/login')}>
        <FiLogIn />
        <span>Login</span>
      </button>

      {menuLateral && (
        <div
          className={`menu_lateral ${
            opening ? "opening_animation" : "closing_animation"
          }`}
        >
          
          <button
            className="close_button"
            onClick={() => {
              setOpening(!opening);

              //This time out for the closing button is the same time of the animation-duration of the closing_animation scss class.
              setTimeout(() => {
                setMenuLateral(!menuLateral);
              }, 2000);
            }}
          >
            <IoIosCloseCircleOutline />
          </button>

          <ul className="list ">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Menu;

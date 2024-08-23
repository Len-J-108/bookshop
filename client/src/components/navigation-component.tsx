"use client";
import React, { FC } from "react";
import Link from "next/link";
import logoStyles from "./logo.module.scss";
import navStyles from "./navigation.module.scss";
import { useCartContext } from "@/context/cart-context/use-cart-context";

const NavigationComponent: FC = () => {
  const { setDrawer } = useCartContext();

  return (
    <div
      id={`${navStyles.navWrapper}`}
      className={`flex direction-row justify-end items-center`}
    >
      <ul className="flex flex-row">
        <li className={navStyles.navLoginContainer}>
          <div
            className={`${logoStyles.nerdSymbol} ${navStyles.icon} text-white flex items-center`}
          >
            
          </div>
          <ul
            className={`${navStyles.loginDropdown} text-neutral-800 w-32 z-20 py-2 px-6 rounded-b-md shadow-md shadow-black `}
          >
            <Link href="/login" className="hover:underline underline-offset-4">
              Sign In
            </Link>
            <Link href="/register">Sign Up</Link>
          </ul>
        </li>
        <li className={navStyles.navLoginContainer}>
          <div
            className={`${logoStyles.nerdSymbol} ${navStyles.icon} text-white flex items-center cursor-pointer`}
            onClick={() => setDrawer((drawer) => !drawer)}
          >
            󰁶
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavigationComponent;

"use client";
import React, { FC } from "react";
import { useCartContext } from "@/context/cart-context/use-cart-context";
import drawerStyles from "../styles/components/cart-drawer.module.scss";
import fontStyles from "../styles/utils/fonts.module.scss";

const CartDrawerComponent: FC = () => {
  const { drawer, setDrawer } = useCartContext();
  const { showDrawer, hideDrawer } = drawerStyles;
  const { nerdSymbol } = fontStyles;
  return (
    <aside
      className={`${drawer ? showDrawer : hideDrawer} w-2/6 h-full rounded-s-md bg-gray-300 text-neutral-900 fixed right-0 z-10`}
    >
      <button
        className={`${nerdSymbol} absolute right-8 top-4 text-2xl hover:scale-110`}
        onClick={() => setDrawer((drawer) => !drawer)}
      >
        󰅚
      </button>
      <ul className="flex flex-col justify-center items-center gap-5 py-9">
        <li>One Item</li>
        <li>Two Item</li>
        <li>Three Item</li>
      </ul>
    </aside>
  );
};
export default CartDrawerComponent;

import React from "react";

export interface ContextState {
  drawer: boolean;
}

export interface ContextDispatch {
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

type ContextProps = ContextState & ContextDispatch;

const defaultState: ContextState = {
  drawer: false,
};

const defaultDispatch: ContextDispatch = {
  setDrawer: () => {},
};

const defaultContext: ContextProps = {
  ...defaultState,
  ...defaultDispatch,
};

const CartContext = React.createContext<ContextProps>(defaultContext);

export default CartContext;

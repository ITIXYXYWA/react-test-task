import React from "react";
import { Provider } from "react-redux";

import { store } from "../store";

export const withStore = (component) => () => {
  return <Provider store={store}>{component()}</Provider>;
};

import React from "react";

// тут нужно в идеале добавить alias и писать @pages
import { Routing } from "../pages";
import { withProviders } from "./providers";

const App = () => {
  return (
    <div>
      <Routing />
    </div>
  );
};

export default withProviders(App);

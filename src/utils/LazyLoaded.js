import React from "react";
export const Landing = React.lazy(() =>
  import("../containers/Landing/Landing")
);
export const Home = React.lazy(() => import("../containers/Home/Home"));


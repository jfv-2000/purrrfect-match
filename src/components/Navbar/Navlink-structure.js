import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Match from "../../pages/match";
import NotFound from "../../pages/not-found";

export default function NavLinkStructure(props) {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="match" element={<Match />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

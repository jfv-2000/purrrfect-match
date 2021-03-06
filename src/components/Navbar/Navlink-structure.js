import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Match from "../../pages/match";
import GridView from "../../pages/grid-view";
import NotFound from "../../pages/not-found";
import Preferences from "../../pages/preferences";

export default function NavLinkStructure(props) {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="match" element={<Match />} />
        <Route path="grid" element={<GridView />} />
        <Route path="preferences" element={<Preferences />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

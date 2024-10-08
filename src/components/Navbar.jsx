import React from "react";
import { BalanceDisplay } from "./balance";

function Navbar({ children }) {
  return (
    <div className="bg-accent p-4 flex justify-between items-center">
      {children}
      <BalanceDisplay />
    </div>
  );
}

export default Navbar;

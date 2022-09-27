import React, { useState } from "react";
import selectedMonthContext from "./context";

const SelectedMonthProvider = ({ children }) => {
  const [month, setMonth] = useState("January");

  const onSelectMonth = () => {
    setMonth("February");
  };

  const contextProvider = {
    month,
    onSelectMonth,
  };

  return (
    <selectedMonthContext.Provider value={contextProvider}>
      {children}
    </selectedMonthContext.Provider>
  );
};

export default SelectedMonthProvider;

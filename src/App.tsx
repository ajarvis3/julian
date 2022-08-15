import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Julian from "./julian/Julian";
import DatePickerWrapper from "./julian/DatePickerWrapper";

function App() {
   const [currDate, setDate] = useState(new Date());
   return (
      <div className="App">
         <header className="App-header">
            <DatePickerWrapper currDate={currDate} setDate={setDate} />
            <Julian date={currDate} />
         </header>
      </div>
   );
}

export default App;

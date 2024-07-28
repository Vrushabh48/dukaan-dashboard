import { useState } from "react";
import "./App.css";
import TopBar from "./Components/TopBar";
import Card from "./Components/Card";
import Table from "./Components/Table";

function App() {
  return (
    <>
      <TopBar />
      <main className="p-3 sm:p-8 w-full gap-8 flex flex-col">
        <Card />
        <Table />
      </main>
    </>
  );
}

export default App;

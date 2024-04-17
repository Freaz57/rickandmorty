import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Filter from "../filter/Filter";
import CardList from "../characterPage/CharecterPage";
import CardDetalis from "../cardDetalis/CardDetalis";
import "../style/style.scss";

function App() {
  const [filters, setFilters] = useState({
    status: "",
    species: "",
    gender: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const [showFilter, setShowFilter] = useState(true);

  return (
    <Router>
      <div className="App">
        {showFilter && <Filter onFilterChange={handleFilterChange} />}
        <main>
          <Routes>
            <Route path="/" element={<CardList filters={filters} />} />
            <Route
              path="/card/:id"
              element={<CardDetalis setShowFilter={setShowFilter} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

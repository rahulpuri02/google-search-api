import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";

function App() {

  return (
 <BrowserRouter>
  <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/:query/:startIndex" element={<SearchResults />} />
  </Routes>
   </BrowserRouter>
  );
}

export default App;

import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import { AppContext } from "./utils/ContextApi";

function App() {

  return (
    <AppContext>
 <BrowserRouter>
  <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/:query/:startIndex" exact element={<SearchResults />} />
  </Routes>
   </BrowserRouter>     
   </AppContext>
  );
}

export default App;

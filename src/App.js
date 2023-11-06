import { Home } from "./pages/Home";
import { Logo } from "./components/Logo/Logo";
import { NotFound } from "./pages/NotFound";
import { ItemsNews } from "./pages/ItemsNews";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<ItemsNews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

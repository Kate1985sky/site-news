import { Home } from "./pages/Home";
import { Logo } from "./components/Logo/Logo";
import { NotFound } from "./pages/NotFound";
import { ItemsNews } from "./pages/ItemsNews";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import styles from './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path=":id" element={<ItemsNews />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

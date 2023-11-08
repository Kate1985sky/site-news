import { Home } from "./pages/Home";
import { Logo } from "./components/Logo/Logo";
import { NotFound } from "./pages/NotFound";
import { ArticlePage } from "./pages/ArticlePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path=":id" element={<ArticlePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

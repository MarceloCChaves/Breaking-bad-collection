import Home from "./pages/Home/Index";
import Characters from "./pages/Characters/Index";
import Character from "./pages/Character/Index";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Characters/:id" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

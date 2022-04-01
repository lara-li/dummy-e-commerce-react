import { Route, Routes} from "react-router-dom";

import MainPage from "./pages/MainPage";
import ProductLanding from "./pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/product1" element={<ProductLanding />}></Route>
    </Routes>
  );
}

export default App;

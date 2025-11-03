import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SharedLayout from "./Component/SharedLayout";
import Main from "./Component/Main/Main";
import ProductDetail from "./Component/ProductDetail";
import Iphone from "./page/Iphone/Iphone";
import Ipad from "./page/Ipad/Ipad";
import Mac from "./page/Mac/Mac";
import Music from "./page/Music/Music";
import Support from "./page/Support/Support";
import TV from "./page/TV/TV";
import Watch from "./page/Watch/Watch";
import Four04 from "./page/Four04/Four04";
import React from "react";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="iphone/:product_id" element={<ProductDetail />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="mac" element={<Mac />} />
        <Route path="music" element={<Music />} />
        <Route path="support" element={<Support />} />
        <Route path="tv" element={<TV />} />
        <Route path="watch" element={<Watch />} />
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;

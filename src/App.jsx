import { Route, Routes } from "react-router-dom";
import VideoPage from "./pages/VideoPage/VideoPage";

import Navigation from "./components/Navigation/Navigation";
import ImagePage from "./pages/ImagePage/ImagePage";
import NewsPage from "./pages/NewsPage/NewsPage";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/images" element={<ImagePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </div>
  );
}

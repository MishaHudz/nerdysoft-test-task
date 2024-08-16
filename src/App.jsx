import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import PlayPage from "./pages/PlayPage/PlayPage";
import { Navigate, Route, Routes } from "react-router-dom";
import ResultPage from "./pages/ResultPage/ResultPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/play-page" element={<PlayPage />} />
        <Route path="/results-page" element={<ResultPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

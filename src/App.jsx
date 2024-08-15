import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import PlayPage from "./pages/PlayPage/PlayPage";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/play-page" element={<PlayPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

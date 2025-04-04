import HomePage from "@/pages/HomePage/HomePage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import { Route, Routes } from "react-router";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;

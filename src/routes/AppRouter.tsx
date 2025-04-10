import { HabitsPage } from "@/pages/HabitsPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <main className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<HabitsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default AppRouter;

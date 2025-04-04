import HomePage from "@/pages/HomePage/HomePage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import { Route, Routes } from "react-router";

import { Box } from "@chakra-ui/react";

const AppRouter = () => {
  return (
    <>
      <Box as="main" height="100vh">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
    </>
  );
};

export default AppRouter;

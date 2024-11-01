import { Outlet } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import NavBar from "../components/NavBar.tsx";
import BottomNav from "../components/BottomNav.tsx";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box
        padding={2}
        display={{ base: "block", md: "none" }}
        bg="gray.50"
        minHeight="100vh"
      >
        <Container maxW="375px" textAlign="center">
          <Outlet />
        </Container>
      </Box>
      <BottomNav />
    </>
  );
};

export default Layout;

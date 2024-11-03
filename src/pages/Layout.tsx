import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar.tsx";
import BottomNav from "../components/BottomNav.tsx";

const Layout = () => {
  return (
    <Box display={{ base: "block", md: "block", lg: "none" }}>
      <NavBar />
      <Box
        margin={0}
        display={{ base: "block", md: "block", lg: "none" }}
        minHeight="100vh"
      >
        <Box padding={0} alignContent={"center"} width={"100%"}>
          <Outlet />
        </Box>
      </Box>
      <BottomNav />
    </Box>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar.tsx";
import BottomNav from "../components/BottomNav.tsx";
import Footer from "../components/Footer.tsx";

const Layout = () => {
  return (
    <Box
      display={{ base: "flex", md: "flex", lg: "none" }}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <NavBar />
      <Box margin={0}>
        <Box padding={0} alignContent={"center"} width={"100%"}>
          <Outlet />
        </Box>
      </Box>
      <BottomNav />
      <Footer />
    </Box>
  );
};

export default Layout;

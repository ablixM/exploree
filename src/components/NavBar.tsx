import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <Box boxShadow="md" background={"blue.100"}>
      <Box paddingX={5} paddingY={3.5} color="white">
        <Link to={"/"}>
          <Image width={"96px"} height={"26px"} src={logo} />
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
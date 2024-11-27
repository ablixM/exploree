import { Avatar, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import useNavStore from "../store/useNavStore.ts";

const NavBar = () => {
  const { isLoggedIn } = useNavStore();
  return (
    <Box
      as={"nav"}
      display={"flex"}
      boxShadow="md"
      background={"blue.100"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"row"}
    >
      <Box paddingX={5} paddingY={3.5} color="white">
        <Link to={"/"}>
          <Image width={"96px"} height={"26px"} src={logo} />
        </Link>
      </Box>

      {isLoggedIn ? (
        <Box paddingX={5} paddingY={3.5} color="white">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;

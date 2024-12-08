import { Avatar, Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import useNavStore from "../../store/useNavStore.ts";
import StatusDrawer from "../StatusDrawer.tsx";
import MenuDrawer from "../MenuDrawer.tsx";

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

      <Flex>
        <Box>
          <StatusDrawer />
        </Box>
        <Box paddingX={4}>
          <MenuDrawer />
        </Box>

        {isLoggedIn ? (
          <Box paddingX={5} paddingY={3.5} color="white">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </Box>
        ) : null}
      </Flex>
    </Box>
  );
};

export default NavBar;

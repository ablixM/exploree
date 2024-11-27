import { Avatar, Box, Button, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import useNavStore from "../../store/useNavStore.ts";
import { CgMenuRightAlt } from "react-icons/cg";
import StatusDrawer from "../StatusDrawer.tsx";

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
          <Button variant="outline" borderRadius={0} border={"none"}>
            <CgMenuRightAlt size={30} />
          </Button>
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

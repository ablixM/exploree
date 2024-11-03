import HeroLogin from "../components/HeroLogin.tsx";
import HeroMain from "../components/HeroMain.tsx";
import ListGrid from "../components/ListGrid.tsx";
import { Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box>
      <HeroLogin />
      <HeroMain />
      <ListGrid />
    </Box>
  );
};

export default HomePage;

import HeroLogin from "../components/HeroLogin.tsx";
import HeroMain from "../components/HeroMain.tsx";
import ListGrid from "../components/ListGrid.tsx";
import { Box } from "@chakra-ui/react";
import Search from "../components/Search.tsx";

const HomePage = () => {
  return (
    <Box>
      <HeroLogin />
      <Search />
      <HeroMain />
      <ListGrid />
    </Box>
  );
};

export default HomePage;

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Status from "./Status.tsx";
import useNavStore from "../store/useNavStore.ts";

const HeroLogin = () => {
  const { setLoggedIn } = useNavStore();
  return (
    <Box paddingY={5} boxShadow="xl">
      <SimpleGrid columns={2} spacing={10} alignItems={"center"}>
        <Box textAlign={"right"}>
          <Heading size={"2xl"}>Exploree</Heading>
          <Text>Opportunities</Text>
        </Box>
        {
          <Box>
            <Status setIsLoggedIn={setLoggedIn} />
          </Box>
        }
      </SimpleGrid>
    </Box>
  );
};

export default HeroLogin;

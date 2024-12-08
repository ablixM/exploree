import { Box, Heading, Highlight, SimpleGrid, Text } from "@chakra-ui/react";
import TypedText from "./TypedText.tsx";

export const HeroTitleBox = () => {
  return (
    <>
      <Box paddingY={8}>
        <SimpleGrid columns={1} spacing={5} alignItems={"center"}>
          <Box textAlign={"center"}>
            <Heading size={"3xl"}>Exploree</Heading>
            <TypedText />
          </Box>
          <Box>
            <Text
              lineHeight={"taller"}
              fontSize={"sm"}
              fontWeight={"light"}
              textAlign={"center"}
              marginX={5}
            >
              <Highlight
                query={["jobs", "Opportunities", "Events", "Tenders"]}
                styles={{ px: "2", py: "1", rounded: "full", bg: "blue.100" }}
              >
                Explore a World of Opportunities Your One-Stop Hub for Jobs,
                Events, and Tenders
              </Highlight>
            </Text>
          </Box>

          {
            // <Box>
            //   <Status setIsLoggedIn={setLoggedIn} />
            // </Box>
          }
        </SimpleGrid>
      </Box>
    </>
  );
};

export default HeroTitleBox;

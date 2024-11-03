import { Box, Flex, Tab, TabIndicator, TabList, Tabs } from "@chakra-ui/react";
import listings from "../data/list.ts";

const ListGrid = () => {
  return (
    <Box
      as={Flex}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      marginY={5}
    >
      <Tabs position="relative" variant="unstyled" size={"lg"}>
        <TabList>
          {listings.results.map((result) => (
            <Tab key={result.id} fontSize={"md"}>
              {result.name}
            </Tab>
          ))}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="3px"
          bg="blue.500"
          borderRadius="5px"
        />
      </Tabs>
    </Box>
  );
};

export default ListGrid;

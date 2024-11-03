import { Box, Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import listings from "../data/list.ts";

const ListBanner = () => {
  return (
    <Box boxShadow="base">
      <Flex
        as={List}
        spacing={3}
        flexDirection={"row"}
        align={"center"}
        justify={"center"}
        boxShadow="inner"
        paddingY={4}
      >
        {listings.results.map((result) => (
          <ListItem
            as={Flex}
            key={result.id}
            fontSize={"sm"}
            paddingX={2}
            marginY={"3"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ListIcon as={FaCircle} color="blue.500" boxSize={2} />
            {result.name}
          </ListItem>
        ))}
      </Flex>
    </Box>
  );
};

export default ListBanner;

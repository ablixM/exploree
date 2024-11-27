import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";

import svgs from "../data/heroMainSvg.ts";

const HeroMain = () => {
  return (
    <Box boxShadow="sm" width={"100%"} padding={3} alignContent={"center"}>
      <SimpleGrid
        columns={2}
        row={2}
        spacingY={2}
        maxWidth={"500px"}
        margin={"0 auto"}
      >
        {svgs.src.map((result) => (
          <Flex key={result.id} justifyContent={"center"} alignItems={"center"}>
            <Image key={result.id} src={result.src} />
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HeroMain;

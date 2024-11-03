import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";

import svgs from "../data/heroMainSvg.ts";

const HeroMain = () => {
  return (
    <Box boxShadow="base" width={"100%"} padding={3}>
      <SimpleGrid
        columns={2}
        row={2}
        spacingY={2}
        alignItems={"center"}
        justifyContent={"center"}
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

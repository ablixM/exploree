import userAgreements from "../data/userAgreements.ts";
import { Flex, Link, SimpleGrid } from "@chakra-ui/react";

const UserAgreementLink = () => {
  return (
    <>
      <SimpleGrid marginY={6} columns={2} row={2} spacing={4}>
        {userAgreements.results.map((result) => (
          <Flex key={result.id} justifyContent={"center"} alignItems={"center"}>
            <Link fontSize={"sm"} key={result.id} href={result.name}>
              {result.name}
            </Link>
          </Flex>
        ))}
      </SimpleGrid>
    </>
  );
};

export default UserAgreementLink;

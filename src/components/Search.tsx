import { Button, Flex, Input, InputGroup } from "@chakra-ui/react";
import { IoSearchCircle } from "react-icons/io5";

const Search = () => {
  return (
    <Flex paddingX={8} alignItems={"center"}>
      <InputGroup>
        <Input borderRadius={0} type="tel" placeholder="Search anything" />
      </InputGroup>
      <Button variant="outline" borderRadius={0}>
        <IoSearchCircle size={50} />
      </Button>
    </Flex>
  );
};

export default Search;

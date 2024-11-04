import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";

export const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box paddingX={5} as={SimpleGrid} columns={1} spacingY={2}>
      <FormControl as={SimpleGrid} columns={1} spacingY={2}>
        <Box>
          <Input
            id="email"
            type="email"
            placeholder={"Email Address"}
            fontSize={"md"}
            paddingY={6}
          />
          <FormHelperText></FormHelperText>
        </Box>
        <InputGroup>
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            fontSize={"md"}
            paddingY={6}
          />
          <InputRightElement width="4.5rem">
            <Button variant={"ghost"} marginTop={3} onClick={handleClick}>
              {show ? (
                <BiHide fontSize={"20px"} />
              ) : (
                <BiShow fontSize={"20px"} />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Box paddingY={2}>
        <Checkbox size="lg" colorScheme="blue" fontSize={"sm"}>
          <Text fontSize={"sm"}>Remember me on this device</Text>
        </Checkbox>
      </Box>
      <Button mt={4} bg="blue.400" type="submit" borderRadius={4}>
        Log In
      </Button>
    </Box>
  );
};

export default LoginForm;

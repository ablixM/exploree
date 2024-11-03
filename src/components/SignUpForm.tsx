import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";
import UserAgreementLink from "./UserAgreementLink.tsx";

const SignUpForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box paddingX={5} textAlign={"center"}>
        <FormControl as={SimpleGrid} columns={1} spacingY={2}>
          <Box>
            <Input
              id="name"
              type="text"
              placeholder={"Full Name"}
              fontSize={"md"}
              paddingY={6}
            />
            <FormHelperText></FormHelperText>
          </Box>
          <Box>
            <Input
              id="email"
              type="email"
              placeholder={"Email"}
              fontSize={"md"}
              paddingY={6}
            />
            <FormHelperText></FormHelperText>
          </Box>
          <Box>
            <Input
              id="PhoneNumber"
              type="number"
              placeholder={"Phone number"}
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
          <InputGroup>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Confirm password"
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
          <Text fontSize={"xs"} paddingY={4}>
            By signing up you agree to the terms and policy.
          </Text>
          <Button mt={4} bg="blue.400" type="submit" borderRadius={4}>
            Sign Up
          </Button>
        </FormControl>
      </Box>

      <Box>
        <UserAgreementLink />
      </Box>
    </>
  );
};

export default SignUpForm;
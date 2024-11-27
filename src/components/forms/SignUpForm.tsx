import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces")
    .nonempty("Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z
    .string()
    .regex(
      /^\+?[0-9]{10,15}$/,
      "Phone number must be between 10 and 15 digits, and can start with +",
    ),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

type FormData = z.infer<typeof schema>;

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
          </Box>
          <Box>
            <Input
              id="email"
              type="email"
              placeholder={"Email"}
              fontSize={"md"}
              paddingY={6}
            />
          </Box>
          <Box>
            <InputGroup>
              <InputLeftAddon paddingY={6}>+251</InputLeftAddon>
              <Input paddingY={6} type="tel" placeholder="phone number" />
            </InputGroup>
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
          <Button
            as={Link}
            to={"/AdditionalInfo"}
            mt={4}
            bg="blue.400"
            type="submit"
            borderRadius={4}
          >
            Sign Up
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default SignUpForm;

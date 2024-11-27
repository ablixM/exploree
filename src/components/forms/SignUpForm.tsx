import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupClient } from "../../services/authService.ts";

const schema = z
  .object({
    fullName: z
      .string()
      .min(2, "Full name must be at least 2 characters")
      .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces")
      .min(1, "Field is required"),
    email: z.string().email("Please enter a valid email address"),
    phoneNumber: z
      .string()
      .regex(
        /^\+?[0-9]{9,15}$/,
        "Phone number must be between 10 and 15 digits, and can start with +",
      ),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormData = z.infer<typeof schema>;

const SignUpForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data: FieldValues) => {
    signupClient
      .post({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
      })
      .then((response) => {
        console.log("Signup successful:", response);
      })
      .catch((error) => {
        console.error("Signup failed:", error);
      });
  };
  return (
    <>
      <Box paddingX={5}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl as={SimpleGrid} columns={1} spacingY={2}>
            <Box>
              <Input
                id="name"
                type="text"
                placeholder={"Full Name"}
                fontSize={"md"}
                paddingY={6}
                {...register("fullName")}
              />
              {errors.fullName && (
                <FormHelperText color={"red.400"}>
                  {errors.fullName.message}
                </FormHelperText>
              )}
            </Box>
            <Box>
              <Input
                id="email"
                type="email"
                placeholder={"Email"}
                fontSize={"md"}
                paddingY={6}
                {...register("email")}
              />
              {errors.email && (
                <FormHelperText color={"red.400"}>
                  {errors.email.message}
                </FormHelperText>
              )}
            </Box>
            <Box>
              <InputGroup>
                <InputLeftAddon paddingY={6}>+251</InputLeftAddon>
                <Input
                  paddingY={6}
                  type="tel"
                  placeholder="phone number"
                  {...register("phoneNumber")}
                />
              </InputGroup>
              {errors.phoneNumber && (
                <FormHelperText color={"red.400"}>
                  {errors.phoneNumber.message}
                </FormHelperText>
              )}
            </Box>
            <InputGroup>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                fontSize={"md"}
                paddingY={6}
                {...register("password")}
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
            {errors.password && (
              <FormHelperText color={"red.400"}>
                {errors.password.message}
              </FormHelperText>
            )}
            <InputGroup>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Confirm password"
                fontSize={"md"}
                paddingY={6}
                {...register("confirmPassword")}
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
            {errors.confirmPassword && (
              <FormHelperText color={"red.400"}>
                {errors.confirmPassword.message}
              </FormHelperText>
            )}
            <Text fontSize={"xs"} paddingY={4}>
              By signing up you agree to the terms and policy.
            </Text>
            <Button
              mt={4}
              bg="blue.400"
              type="submit"
              borderRadius={4}
              width={"100%"}
            >
              Sign Up
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default SignUpForm;

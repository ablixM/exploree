import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
import { loginClient } from "../../services/authService.ts";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

type FormData = z.infer<typeof schema>;

export const LoginForm = () => {
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
    loginClient
      .post({ email: data.email, password: data.password })
      .then((response) => {
        console.log("Login successful:", response);
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <Box paddingX={5} as={SimpleGrid} columns={1} spacingY={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl as={SimpleGrid} columns={1} spacingY={2}>
          <Box>
            <Input
              id="email"
              type="email"
              placeholder={"Email Address"}
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
          </Box>
        </FormControl>

        <Button
          width={"100%"}
          mt={4}
          bg="blue.400"
          type="submit"
          borderRadius={4}
        >
          Log In
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;

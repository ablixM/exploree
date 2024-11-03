import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export const SignUpHeading = () => {
  return (
    <Box as={Flex} align={"center"} flexDirection={"column"} marginY={5}>
      <Heading>Let's sign you up!</Heading>
      <Box
        as={Flex}
        flexDirection={"row"}
        align={"center"}
        justifyContent={"center"}
      >
        <Text fontSize={"xs"}>Already have an account?</Text>
        <Button variant="ghost" fontSize={"sm"} color={"blue.500"}>
          Sign in
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpHeading;

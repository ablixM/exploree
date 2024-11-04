import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  heading: string;
  text: string;
  BtnLink: string;
  BtnLabel: string;
}

export const SignStatusHeading = ({
  heading,
  text,
  BtnLink,
  BtnLabel,
}: Props) => {
  return (
    <Box as={Flex} align={"center"} flexDirection={"column"} marginY={5}>
      <Heading>{heading}</Heading>
      <Box
        as={Flex}
        flexDirection={"row"}
        align={"center"}
        justifyContent={"center"}
      >
        <Text fontSize={"xs"}>{text}</Text>
        <Button
          as={Link}
          to={BtnLink}
          variant="ghost"
          fontSize={"sm"}
          color={"blue.500"}
        >
          {BtnLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default SignStatusHeading;

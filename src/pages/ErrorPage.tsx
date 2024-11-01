import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "invalid page"
            : "some error has occurred"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;

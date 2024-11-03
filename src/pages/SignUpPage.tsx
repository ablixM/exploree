import SignUpForm from "../components/SignUpForm.tsx";
import SignUpHeading from "../components/SignUpHeading.tsx";
import ListBanner from "../components/ListBanner.tsx";
import { Box } from "@chakra-ui/react";

const SignUpPage = () => {
  return (
    <Box>
      <ListBanner />
      <SignUpHeading />
      <SignUpForm />
    </Box>
  );
};

export default SignUpPage;

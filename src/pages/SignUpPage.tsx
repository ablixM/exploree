import SignUpForm from "../components/SignUpForm.tsx";
import SignStatusHeading from "../components/SignStatusHeading.tsx";
import ListBanner from "../components/ListBanner.tsx";
import { Box } from "@chakra-ui/react";
import UserAgreementLink from "../components/UserAgreementLink.tsx";

const SignUpPage = () => {
  return (
    <Box>
      <ListBanner />
      <SignStatusHeading
        heading={"Let's sign you up!"}
        text={"Already have an account?"}
        BtnLabel={"Log in"}
        BtnLink={"/Login"}
      />
      <SignUpForm />
      <Box>
        <UserAgreementLink />
      </Box>
    </Box>
  );
};

export default SignUpPage;

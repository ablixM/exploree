import ListBanner from "../components/ListBanner.tsx";
import LoginForm from "../components/forms/LoginForm.tsx";
import SignStatusHeading from "../components/SignStatusHeading.tsx";
import UserAgreementLink from "../components/UserAgreementLink.tsx";
import { Box } from "@chakra-ui/react";

const LogInPage = () => {
  return (
    <>
      <ListBanner />
      <SignStatusHeading
        heading={"Log in to your account"}
        text={"Don’t have an account?"}
        BtnLabel={"Sign Up"}
        BtnLink={"/SignUp"}
      />
      <LoginForm />
      <Box>
        <UserAgreementLink />
      </Box>
    </>
  );
};

export default LogInPage;

import { Button } from "@chakra-ui/react";

interface Props {
  setIsLoggedIn: (value: boolean) => void;
}

export const StatusNav = ({ setIsLoggedIn }: Props) => {
  return (
    <>
      <Button
        fontWeight={"thin"}
        paddingX={6}
        bg="blue.500"
        color={"black"}
        onClick={() => setIsLoggedIn(true)} // Simulate sign-in action
      >
        SIGN IN
      </Button>
      <Button
        fontWeight={"thin"}
        paddingX={6}
        bg="transparent"
        borderColor={"blue.500"}
        color={"blue.500"}
        variant="outline"
        onClick={() => setIsLoggedIn(true)} // Simulate sign-up action
      >
        SIGN UP
      </Button>
    </>
  );
};

export default StatusNav;

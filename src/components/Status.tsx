import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useNavStore from "../store/useNavStore.ts";

interface Props {
  setIsLoggedIn: (value: boolean) => void;
}

export const Status = ({ setIsLoggedIn }: Props) => {
  const { isLoggedIn } = useNavStore();
  const navigate = useNavigate();
  return (
    <SimpleGrid row={2} spacingY={2}>
      <Box>
        <Button
          fontWeight={"thin"}
          paddingX={6}
          bg="blue.500"
          color={"black"}
          variant="solid"
          onClick={() => {
            navigate("/login");
            setIsLoggedIn(isLoggedIn);
          }}
        >
          LOG IN
        </Button>
      </Box>
      <Box>
        <Button
          fontWeight={"thin"}
          paddingX={6}
          bg="transparent"
          borderColor={"blue.500"}
          color={"blue.500"}
          variant="outline"
          onClick={() => {
            navigate("/signup");
            setIsLoggedIn(isLoggedIn);
          }}
        >
          SIGN UP
        </Button>
      </Box>
    </SimpleGrid>
  );
};

export default Status;

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const StatusDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} bg={"blue.500"} onClick={onOpen}>
        Sign In
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={"blue.400"} textAlign={"center"}>
            Log In or Sign Up
          </DrawerHeader>

          <DrawerBody>
            <Button
              width={"100%"}
              mt={4}
              bg="blue.400"
              borderRadius={4}
              as={Link}
              to={"/Login"}
              onClick={() => onClose()}
            >
              Log In
            </Button>

            <Text textAlign={"center"} fontSize={"sm"} paddingY={2}>
              or
            </Text>
            <Button
              as={Link}
              to={"/signUp"}
              borderRadius={4}
              width={"100%"}
              variant="outline"
              borderColor={"blue.500"}
              onClick={() => onClose()}
            >
              Sign Up
            </Button>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default StatusDrawer;

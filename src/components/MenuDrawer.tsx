import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
} from "@chakra-ui/react";
import { useRef } from "react";
import { CgMenuRightAlt } from "react-icons/cg";

const MenuDrawer = () => {
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();
  const menuBtnRef = useRef();

  return (
    <>
      <Button
        ref={menuBtnRef}
        variant="ghost"
        borderRadius={0}
        onClick={onMenuOpen}
      >
        <CgMenuRightAlt size={30} />
      </Button>
      <Drawer
        isOpen={isMenuOpen}
        placement="right"
        onClose={onMenuClose}
        finalFocusRef={menuBtnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onMenuClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;

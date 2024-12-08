import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
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
  const menuBtnRef = useRef<HTMLButtonElement>(null);

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
          <DrawerHeader></DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;

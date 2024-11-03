import { Flex } from "@chakra-ui/react";
import BottomNavBtn from "./BottomNavBtn.tsx";
import { navItems } from "../data/navItems.ts";
import useNavStore from "../store/useNavStore.ts";

const BottomNav = () => {
  const { isLoggedIn, activeNav, setActiveNav } = useNavStore();
  return (
    <Flex
      bg="blue.100"
      as="nav"
      position="fixed"
      bottom="0"
      width="100%"
      color="white"
      py={1}
      justify="space-around"
      boxShadow="0 -2px 10px rgba(0, 0, 0, 0.1)"
    >
      {isLoggedIn
        ? navItems.map((item, index) => (
            <BottomNavBtn
              key={index}
              icon={item.icon}
              filledIcon={item.filledIcon}
              label={item.label}
              isActive={activeNav === item.label}
              onClick={() => setActiveNav(item.label)}
            />
          ))
        : null}
    </Flex>
  );
};

export default BottomNav;
